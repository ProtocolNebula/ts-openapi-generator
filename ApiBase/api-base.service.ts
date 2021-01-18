import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

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
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  };

  constructor(protected http: HttpClient) {}

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
    return this.http.get(this.serverURL + url, options);
  }

  public doPost(
    url,
    params,
    data,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http.post(this.serverURL + url, data, options);
  }

  public doPut(
    url,
    params,
    data,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http.put(this.serverURL + url, data, options);
  }

  public doOptions(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http.options(this.serverURL + url, options);
  }

  public doPatch(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http.patch(this.serverURL + url, options);
  }

  public doDelete(
    url,
    params,
    data = null,
    customOptions?: Partial<HttpOptions>,
  ): Observable<any> {
    const options = this.getOptions(customOptions);
    url = this.parseURLParams(url, params);
    return this.http.delete(this.serverURL + url, options);
  }

  public generateFormData(values: any): FormData {
    const form = new FormData();
    for (const key in values) {
      if (values[key]) {
        const element = values[key];
        form.append(key, element, element?.name);
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

  protected getOptions(customOptions?: Partial<HttpOptions>) {
    if (!customOptions) {
      return { headers: this.httpHeaders };
    }
    return {
      ...customOptions,
      headers: new HttpHeaders({
        ...this.httpHeadersPlain,
        ...customOptions?.headers,
      }),
    };
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
}
