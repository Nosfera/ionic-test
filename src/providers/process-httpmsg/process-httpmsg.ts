import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
// This throws errors
import 'rxjs/add/Observable/throw';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessHttpmsgProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProcessHttpmsgProvider Provider');
  }
  // constructs the response from what the provider gets
  public extractData(res: Response) {
     let body = res.json();
     // returns the body of the response
     return body || { };
   }
   // process the incomming error message
   public handleError (error: Response | any) {
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
