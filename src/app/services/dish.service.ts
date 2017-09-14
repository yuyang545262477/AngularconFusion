import {Inject, Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import {Dish} from '../shared/dish';
import {ProcessHttpMsgService} from './process-http-msg.service';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(private _restangular: Restangular,
              private _processHttpMsgService: ProcessHttpMsgService,
              @Inject('BaseURL') private _baseUrl) {
  }

  getDishes(): Observable<Dish[]> {
    return this._restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this._restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this._restangular.all('dishes').getList({featured: true}).map(dishes => dishes[0]);
  }


  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => {
        return dishes.map(dish => dish.id);
      })
      .catch(httpError => {
        return this._processHttpMsgService.handleError(httpError);
      });
  }

}
