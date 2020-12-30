import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app.reducers';
import { HTTP } from '@ionic-native/http/ngx';
import { ApiBaseService } from './api-base.service';
import { from } from 'rxjs/internal/observable/from';

export interface APIError {
  error: any;
  errorText: string;
}

/**
 * Implementation of angular-http
 * https://angular.io/guide/http
 *
 * TODO: Improve retry with: https://www.learnrxjs.io/operators/error_handling/retrywhen.html
 */
@Injectable()
export class ApiBaseNativeService extends ApiBaseService {
  constructor(
    protected http: HttpClient,
    protected store$: Store<AppState>,
    protected httpNative: HTTP
  ) {
    super(http, store$);
  }

  public doGet(url, params = null, data = null): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.get(this.serverURL + url, {}, this.httpHeadersPlain)
    ).pipe(
      map((response) => JSON.parse(response.data)),
      catchError((error) => this.handleError(error))
    );
  }

  public doPost(url, params, data): Observable<any> {
    // const options = this.getOptions(url, params, data);
    this.setHeaders();
    url = this.parseURLParams(url, params);
    return from(this.httpNative.post(this.serverURL + url, data, {})).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  public doPut(url, params, data): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.put(this.serverURL + url, data, this.httpHeadersPlain)
    ).pipe(catchError((error) => this.handleError(error)));
  }

  public doDel(url, params, data = null): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.delete(this.serverURL + url, {}, this.httpHeadersPlain)
    ).pipe(catchError((error) => this.handleError(error)));
  }

  public generateFormData(values: any): FormData {
    const form = new FormData();
    for (const key in values) {
      if (values[key]) {
        form.append(key, values[key]);
      }
    }
    return form;
  }

  /**
   * Generate the httpHeaders property
   */
  protected setHeaders() {
    for (const key in this.httpHeadersPlain) {
      if (!this.httpHeadersPlain[key]) {
        continue;
      }
      this.httpNative.setHeader(
        '*',
        String(key),
        String(this.httpHeadersPlain[key])
      );
    }
  }

  protected handleError(error: HttpErrorResponse): Observable<APIError> {
    console.error('ERROR CATCHED', error);
    return super.handleError(error);
  }

  protected getOptions(url, params = null, data = null) {
    return {
      headers: this.httpHeaders,
      // params: this.parseURLParams(url, params),
    };
  }
}
