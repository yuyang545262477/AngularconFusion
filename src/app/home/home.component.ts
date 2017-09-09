import {Component, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {LeaderService} from '../services/leader.service';
import {PromotionService} from '../services/promotion.service';
import {Dish} from '../share/dish';
import {Leader} from '../share/leader';
import {Promotion} from '../share/promotion';

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
    this._dishService.getFeaturedDish()
      .subscribe((dish) => this.dish = dish);
    this._promotionService.getFeaturedPromotion()
      .subscribe((promotion) => this.promotion = promotion);
    this._leaderService.getFeaturedLeader()
      .subscribe((leader) => this.leader = leader);
  }

}
