import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {FormGroup} from '@angular/forms';
import {Feedback} from '../shared/feedback';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  constructor(private _restAngular: Restangular) {
  }

  submitFeedback(feedBackForm: Feedback): Observable<Feedback> {
    return this._restAngular.all('feedback').post(feedBackForm);
  }

}
