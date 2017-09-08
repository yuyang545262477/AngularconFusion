import {Component, OnInit} from '@angular/core';
import {Dish} from '../share/dish';
import {Promotion} from '../share/promotion';
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../share/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private _dishService: DishService,
              private _promotionService: PromotionService,
              private _leaderService: LeaderService) {
  }


  ngOnInit() {
    this.dish = this._dishService.getFeaturedDish();
    this.promotion = this._promotionService.getFeaturedPromotion();
    this.leader = this._leaderService.getFeaturedLeader();
  }

}
