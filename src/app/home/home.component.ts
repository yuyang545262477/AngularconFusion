import {Component, OnInit} from '@angular/core';
import {Dish} from '../share/dish';
import {Promotion} from '../share/promotion';
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;

  constructor(private _dishService: DishService,
              private _promotionService: PromotionService) {
  }


  ngOnInit() {
    this.dish = this._dishService.getFeaturedDish();
    this.promotion = this._promotionService.getFeaturedPromotion();
  }

}
