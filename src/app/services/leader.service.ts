import {Injectable} from '@angular/core';
import {Leader} from '../share/leader';
import {LEADERS} from '../share/leaders';

@Injectable()
export class LeaderService {

  constructor() {
  }

  getLeaders(): Leader[] {
    return LEADERS;
  }


}
