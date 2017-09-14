import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class LeaderService {
  constructor(private _restAngular: Restangular) {
  }

  getLeaders(): Observable<Leader[]> {
    return this._restAngular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this._restAngular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this._restAngular.all('leaders').getList({featured: true}).map(leaders => {
      console.log(leaders);
      return leaders[0];
    });
  }


}
