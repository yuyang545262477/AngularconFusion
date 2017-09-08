import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public mdDialog: MdDialog) {
  }

  ngOnInit() {
  }

  openLoginForm() {
    this.mdDialog.open(LoginComponent, {width: '500px', height: '450px'});
  }


}
