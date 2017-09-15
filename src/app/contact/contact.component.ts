import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactType} from '../shared/contactType';
import {Feedback} from '../shared/feedback';
import {expand, flyInOut} from '../animations/app.animation';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  feedBackCopy: Feedback;
  isRequesting: Boolean;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };
  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },

  };


  constructor(private _formBuilder: FormBuilder,
              private _feedBackService: FeedbackService) {
    this.createForm();
    this.isRequesting = false;
  }

  ngOnInit() {
  }

  private createForm() {
    this.feedbackForm = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onSubmit() {
    // this.feedback = this.feedbackForm.value;
    this.isRequesting = true;
    this._feedBackService.submitFeedback(this.feedbackForm.value)
      .subscribe(response => {
        this.isRequesting = false;
        this.feedBackCopy = response;
        setTimeout(() => this.feedBackCopy = null, 5000);
      });
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  private onValueChanged(data?: any) {
    if (!this.feedbackForm) return;
    Object.keys(this.formErrors)
      .map(key => {
        this.formErrors[key] = '';
        if (this.feedbackForm.get(key).dirty && this.feedbackForm.get(key).invalid) {
          Object.keys(this.feedbackForm.get(key).errors)
            .map(errorKey => {
              this.formErrors[key] += this.validationMessages[key][errorKey] + ' ';
            });
        }
      });
  }
}
