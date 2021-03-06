import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class HttpClient {

  private localIP: string;

  constructor(private http: Http) {}
  
  addLocalIP(headers: Headers) {
    if(window['localIP'])
      headers.append('localip', window['localIP']);
  }

  get(url) {
    let headers = new Headers();
    this.addLocalIP(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.addLocalIP(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}