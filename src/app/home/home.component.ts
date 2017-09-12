import {Component, Inject, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {LeaderService} from '../services/leader.service';
import {PromotionService} from '../services/promotion.service';
import {Dish} from '../shared/dish';
import {Leader} from '../shared/leader';
import {Promotion} from '../shared/promotion';

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
              private _leaderService: LeaderService,
              @Inject('BaseURL') private _baseUrl) {
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
