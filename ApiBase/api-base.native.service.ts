import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ApiBaseService } from './api-base.service';

/**
 * Implementation of angular-http
 * https://angular.io/guide/http
 *
 * TODO: Improve retry with: https://www.learnrxjs.io/operators/error_handling/retrywhen.html
 */
@Injectable()
export class ApiBaseNativeService extends ApiBaseService {
  constructor(protected http: HttpClient, protected httpNative: HTTP) {
    super(http);
  }

  public doGet(url, params = null, data = null): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.get(this.serverURL + url, {}, this.httpHeadersPlain),
    ).pipe(map((response) => JSON.parse(response.data)));
  }

  public doPost(url, params, data): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    this.setHeaders();
    url = this.parseURLParams(url, params);
    return from(this.httpNative.post(this.serverURL + url, data, {})).pipe();
  }

  public doPut(url, params, data): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.put(this.serverURL + url, data, this.httpHeadersPlain),
    );
  }

  public doPatch(url, params, data): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.patch(this.serverURL + url, data, this.httpHeadersPlain),
    );
  }

  public doDel(url, params, data = null): Observable<any> {
    // const options = this.getOptions(url, params, data);
    url = this.parseURLParams(url, params);
    return from(
      this.httpNative.delete(this.serverURL + url, {}, this.httpHeadersPlain),
    );
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
        String(this.httpHeadersPlain[key]),
      );
    }
  }
}
