import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Promotion} from '../shared/promotion';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private _restAngular: Restangular) {
  }

  getPromotions(): Observable<Promotion[]> {
    return this._restAngular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this._restAngular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this._restAngular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);
  }
}
