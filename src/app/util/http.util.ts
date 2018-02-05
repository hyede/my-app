import {Injectable} from '@angular/core';
import {Response, RequestOptions, Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Config} from '../service/config/config.service';
import {InterceptorService} from 'ng2-interceptors';



@Injectable()
export class HttpUtil {

  private baseUrl: any;
  private withCredentials : boolean = true;

  constructor(private config: Config, private http: InterceptorService) {
    let app = config.appConfig;
    this.baseUrl = app.baseUrl;
  }

  post(url: string, param?: any) {
    url = this.baseUrl + url;

    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    //noinspection TypeScriptValidateTypes
    return this.http.post(url, param, options)
      .map(this.extractData)
      .catch(this.handleError);

  }




  put(url: string, param?: any) {
    url = this.baseUrl + url;

    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({withCredentials: this.withCredentials});
    //noinspection TypeScriptValidateTypes
    return this.http.put(url, param, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  delete(url: string) {
    url = this.baseUrl + url;

    let headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
    let options = new RequestOptions({withCredentials: this.withCredentials});
    //noinspection TypeScriptValidateTypes
    return this.http.delete(url, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  get (url: string) {
    url = this.baseUrl + url;

    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: this.withCredentials});
    //noinspection TypeScriptValidateTypes
    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
