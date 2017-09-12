import {Component, Inject, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../shared/dish';
import {inject} from '@angular/core/testing';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  errMess: string;
  dishes: Dish[];

  constructor(private dishService: DishService,
              @Inject('BaseURL') private _baseUrl) {
  }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        backErrorMsg => this.errMess = <any>backErrorMsg);
  }


}
