import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

import {Dish} from '../shared/dish';

import {ProcessHttpMsgService} from './process-http-msg.service';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class DishService {

  constructor(private _http: Http,
              private _processHttpMsgService: ProcessHttpMsgService) {
  }

  getDishes(): Observable<Dish[]> {
    return this._http.get(baseURL + 'dishes')
      .map(res => {
        console.log('dishService res', res);
        return this._processHttpMsgService.extractData(res);
      })
      .catch(httpError => {
        return this._processHttpMsgService.handleError(httpError);
      });
  }

  getDish(id: number): Observable<Dish> {
    return this._http.get(`${baseURL}dishes/${id}`)
      .map(res => {
        return this._processHttpMsgService.extractData(res);
      })
      .catch(httpError => {
        return this._processHttpMsgService.handleError(httpError);
      });
  }

  getFeaturedDish(): Observable<Dish> {
    return this._http.get(`${baseURL}dishes?featured=true`)
      .map(res => {
        return this._processHttpMsgService.extractData(res);
      })
      .catch(httpError => {
        return this._processHttpMsgService.handleError(httpError);
      });
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
