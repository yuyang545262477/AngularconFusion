import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

@Injectable()
export class ProcessHttpMsgService {

  constructor() {
  }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

}
