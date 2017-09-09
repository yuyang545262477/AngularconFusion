import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs/Observable";
import {Dish} from '../share/dish';
import {DISHES} from '../share/dishes';

@Injectable()
export class DishService {

  constructor() {
  }

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id));
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }

}
