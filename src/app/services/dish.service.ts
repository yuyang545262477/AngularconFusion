import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {Http} from '@angular/http';
import {ProcessHttpMsgService} from './process-http-msg.service';

@Injectable()
export class DishService {

  constructor(private _http: Http,
              private _procssHTTPMsgService: ProcessHttpMsgService) {
  }

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(1);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id));
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }

}
