import {Injectable} from '@angular/core';
import {Dish} from '../share/dish';
import {DISHES} from '../share/dishes';

@Injectable()
export class DishService {

  constructor() {
  }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

}
