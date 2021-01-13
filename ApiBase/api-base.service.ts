import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app.reducers';
import * as AuthActions from '@app/store/auth/auth.actions';

const PROD_MODE = environment.production;

export interface APIError {
  error: any;
  errorText: string;
}

export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

/**
 * Implementation of angular-http
 * https://angular.io/guide/http
 *
 * TODO: Improve retry with: https://www.learnrxjs.io/operators/error_handling/retrywhen.html
 */
@Injectable()
export class ApiBaseService {
  /**
   * Server url.
   * Can be changed with setServerURL
   */
  protected serverURL: string = environment.serverURL;

  /**
   * Generated headers to improve performance
   */
  protected httpHeaders: HttpHeaders;

  /**
   * All headers to re-generate httpHeaders (setters and getters not working)
   */
  protected httpHeadersPlain: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  };

  protected authStoreObserver$: Subscription;

  constructor(protected http: HttpClient, protected store$: Store<AppState>) {
    this.handleError = this.handleError.bind(this);
    // this.generateHeaders();
    this.subscribeToStore(); // setToken call generateHeaders
  }

  subscribeToStore() {
    // TODO: Optimize this to avoid be called on every "auth", only for "auth_token"
    this.authStoreObserver$ = this.store$
      .select('auth')
      .subscribe((data: any) => {
        if (!!data && !!data.token) {
          this.setToken(data.token.token);
        } else {
          this.setToken(null);
        }
      });
  }

  setToken(token: string): void {
    if (token) {
      this.httpHeadersPlain['Authorization'] = 'Bearer ' + token;
    } else {
      delete this.httpHeadersPlain['Authorization'];
    }
    this.generateHeaders();
  }

  setServerURL(url: string): void {
    this.serverURL = url;
  }

  public doGet(
    url,
    params = null,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    // TODO: Add support to http.get<RESPONSETYPE>() or on .subscribe
    return this.http.get(this.serverURL + url, options).pipe(
      // retry(1),
      catchError((error) => this.handleError(error)),
    );
  }

  public doPost(
    url,
    params,
    data,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http
      .post(this.serverURL + url, data, options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public doPut(
    url,
    params,
    data,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http
      .put(this.serverURL + url, data, options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public doOptions(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http
      .options(this.serverURL + url, options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public doPatch(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http
      .patch(this.serverURL + url, options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public doDelete(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http
      .delete(this.serverURL + url, options)
      .pipe(catchError((error) => this.handleError(error)));
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
  protected generateHeaders() {
    this.httpHeaders = new HttpHeaders(this.httpHeadersPlain);
  }

  protected handleError(error: HttpErrorResponse): Observable<APIError> {
    let errorText;
    const errorData = error.error;

    if (error.status === 401) {
      this.store$.dispatch(AuthActions.logOut());
      return throwError({
        error,
        errorText: 'Su sesión ha caducado. Por favor, inicie sesión de nuevo',
      } as APIError);
    }

    if (!errorData) {
      errorText = error.message;
    } else if (errorData.errors) {
      if (typeof errorData.errors === 'string') {
        errorText = errorData.errors;
      } else {
        errorText = this.readErrorArray(errorData.errors);
      }
    } else if (errorData.error) {
      errorText = errorData.error[0];
    } else if (errorData.title) {
      errorText = errorData.title;
    } else if (!(errorData instanceof ProgressEvent) && !errorData.srcElement) {
      errorText = this.readErrorArray(errorData);
    } else {
      errorText =
        'URL could not be loaded. Please, check your internet connection.';
    }

    if (!PROD_MODE) {
      console.groupCollapsed('Response error:');
      console.error(errorText);
      console.error(error);
      console.groupEnd();
    }

    return throwError({
      error,
      errorText,
    } as APIError);
  }

  protected getOptions(customOptions?: Partial<HttpOptions>) {
    return Object.assign({ headers: { ...this.httpHeaders } }, customOptions);
  }

  /**
   * Generate an URL with received params.
   * If params are curlyBraced ({}) will be replaced in the url,
   * else will be added to query (?)
   * @param url Original url
   * @param params Params to add (query and/or replace curly braces)
   */
  protected parseURLParams(url, params): any {
    if (!params) {
      return url;
    }

    // const httpParams = new HttpParams();
    const queryParams = new URLSearchParams();

    // tslint:disable-next-line: forin
    for (const param in params) {
      // TODO: Improve this or change swagger generator logic
      const paramCurly = '{' + param + '}';
      const value = params[param];

      if (url.indexOf(paramCurly) > -1) {
        url = url.replace(paramCurly, value);
        // httpParams.set(param, value);
      } else {
        queryParams.set(param, value);
      }
    }

    const paramsString = queryParams.toString();
    return paramsString !== '' ? url + '?' + queryParams.toString() : url;
  }

  protected readErrorArray(errors) {
    let errorText = 'No se pudo contactar con el servidor';
    if (typeof errors === 'object' && 'errorCode' in errors) {
      return errors.message;
    }
    if (typeof errors === 'string' && errors !== '') {
      return errors;
    }
    return errorText;
    // tslint:disable-next-line: forin
    for (const errorKey in errors) {
      if (!errors[errorKey]) {
        continue;
      }

      if (typeof errors[errorKey] !== 'object') {
        if (errorText !== '') {
          errorText += '<br />';
        }
        errorText += errorKey + ':' + errors[errorKey];
      } else if (Array.isArray(errors[errorKey])) {
        for (const errorDetails of errors[errorKey]) {
          if (typeof errorDetails === 'object') {
            break;
          }
          if (errorText !== '') {
            errorText += '<br />';
          }
          errorText += '- ' + errorDetails;
        }
      }
    }
    return errorText;
  }
}
