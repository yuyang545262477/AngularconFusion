import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Leader} from '../share/leader';
import {LEADERS} from '../share/leaders';

@Injectable()
export class LeaderService {
  constructor() {
  }

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.id === id)[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((dish) => dish.featured)[0]).delay(2000);
  }


}
