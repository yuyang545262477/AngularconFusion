import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

@Injectable()
export class ProcessHttpMsgService {

  constructor() {
  }

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(httpError: Response | any) {
    let baskErrorMsg: string;
    if (httpError instanceof Response) {
      const body = httpError.json();
      const err = body.error || JSON.stringify(body);
      baskErrorMsg = `${httpError.status} - ${httpError.statusText || ''} ${err}`;
    } else {
      baskErrorMsg = httpError.message;
    }
    console.error(baskErrorMsg);

    return Observable.throw(baskErrorMsg);
  }

}
