import {Component, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../share/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  SelectedDish: Dish;

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish) {
    this.SelectedDish = dish;
  }

}
