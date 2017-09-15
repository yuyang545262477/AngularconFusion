import {Component, Inject, OnInit} from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  leadersError: string;

  constructor(private _leaderService: LeaderService,
              @Inject('BaseURL') private _baseUrl) {
  }

  ngOnInit() {
    this._leaderService.getLeaders()
      .subscribe((leaders) => this.leaders = leaders,
        leaderRequestError => this.leadersError = leaderRequestError
      );
  }

}
