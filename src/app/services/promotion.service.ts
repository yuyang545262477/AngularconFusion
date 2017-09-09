import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Promotion} from '../share/promotion';
import {PROMOTIONS} from '../share/promotions';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Observable<Promotion[]> {
    return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promotion) => promotion.id === id)[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promotion => promotion.featured)[0]).delay(2000);
  }
}
