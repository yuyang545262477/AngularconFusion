import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    remember: false,
    username: null,
    password: null
  };

  constructor(public mdDialogRef: MdDialogRef<LoginComponent>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.mdDialogRef.close();
  }

}
