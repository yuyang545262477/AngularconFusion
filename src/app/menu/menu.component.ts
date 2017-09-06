import {Component, OnInit} from '@angular/core';
import {Dish} from '../share/dish';
import {DISHES} from '../share/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;
  SelectedDish: Dish;

  constructor() {
  }

  ngOnInit() {

  }

  onSelect(dish: Dish) {
    this.SelectedDish = dish;
  }

}
