import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {DishService} from '../services/dish.service';

import {Dish} from '../share/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor(private _dishService: DishService,
              private _activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    // this._dishService.getDish(id)
    //   .subscribe((dish) => this.dish = dish);

    this._dishService.getDishIds().subscribe(dishIds => {
      this.dishIds = dishIds;
    });
    this._activatedRoute.params
      .switchMap((params: Params) => this._dishService.getDish(+params['id']))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }

  goBack(): void {
    this._location.back();
  }

  private setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
}
