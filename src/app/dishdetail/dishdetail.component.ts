import {Component, Input, OnInit} from '@angular/core';

import {Dish} from '../share/dish';
import {DishService} from '../services/dish.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;

  constructor(private _dishService: DishService,
              private _activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.params['id'];
    this.dish = this._dishService.getDish(id);
  }

  goBack(): void {
    this._location.back();
  }

}
