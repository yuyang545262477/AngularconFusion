import {Location} from '@angular/common';
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {DishService} from '../services/dish.service';

import {Dish} from '../shared/dish';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(.5)',
        opacity: 0
      })),
      transition('*=>*', animate('.5s ease-in-out'))
    ])
  ]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  commentForm: FormGroup;

  dishIds: number[];
  prev: number;
  next: number;

  dishCopy = null;
  visibility = 'shown';
  commentFormErrors = {
    'author': '',
    'comment': ''
  };

  commentFormValidationMessages = {
    'author': {
      'required': 'author is required',
      'minlength': 'author must be at least 2 characters long'
    },
    'comment': {
      'required': 'comment is required'
    }
  };


  constructor(private _dishService: DishService,
              private _activatedRoute: ActivatedRoute,
              private _location: Location,
              private _formBuilder: FormBuilder,
              @Inject('BaseURL') private _baseUrl) {
    this.createCommitForm();
  }


  ngOnInit() {
    this._dishService.getDishIds().subscribe(dishIds => {
      this.dishIds = dishIds;
    });
    this._activatedRoute.params
      .switchMap((params: Params) => {
        this.visibility = 'hidden';
        return this._dishService.getDish(+params['id']);
      })
      .subscribe(dish => {
        this.dish = dish;
        this.dishCopy = dish;
        this.visibility = 'shown';
        this._setPrevNext(dish.id);
      });
  }

  goBack(): void {
    this._location.back();
  }

  private _setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }


  private createCommitForm() {
    /*
    *  TODO:创建响应式表单
    *  1.数据结构参照 Comment
    *  2. author required ; at least be two characters
    *  3. comments:required;
    *  4. valueChanges observable to trigger the form validation
    *  !task3!
    *  5.show preview and not include submission date
    *  6. display only if  the user enter valid information
    *  7. automatically add date && push the comment to Comments class
    * */

    this.commentForm = this._formBuilder.group({
      rating: 5,
      comment: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      date: ''
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onCommentFormValueChange(data));

    this.onCommentFormValueChange();
  }

  onCommentSubmit() {
    let comment;
    /**@des update comments*/
    this.commentForm.controls['date'].setValue(new Date().toISOString());
    comment = this.commentForm.value;
    this.dishCopy.comments.push(comment);
    this.dishCopy.save()
      .subscribe(dish => this.dish = dish);
    /**@des reset form*/
    this.commentForm.reset({
      rating: 5,
      comment: '',
      author: '',
      date: ''
    });

  }

  private onCommentFormValueChange(data?: any) {
    if (!this.commentForm) return;
    Object.keys(this.commentFormErrors)
      .map(key => {
        this.commentFormErrors[key] = '';
        if (this.commentForm.get(key).dirty && this.commentForm.get(key).invalid) {
          Object.keys(this.commentForm.get(key).errors).map(errorKey => {
            this.commentFormErrors[key] = this.commentFormValidationMessages[key][errorKey] + ' ';
          });
        }
      });
  }

  // private resetClear() {
  //   if (!this.commentForm) return;
  //   Object.keys(this.commentForm.controls).map(key => {
  //     console.log(this.commentForm.controls[key]);
  //     this.commentForm.controls[key].setErrors(null);
  //   });
  // }
}
