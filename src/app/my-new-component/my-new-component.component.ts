import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [trigger('myAnimation', [
    state('small', style({
      transform: 'scale(1)',
    })),
    state('large', style({
      transform: 'scale(1.2)',
    })),
    transition('small <=> large', animate('300ms ease-in'))
  ])]
})
export class MyNewComponentComponent implements OnInit {
  someProperty: String = '';
  state: String = 'small';

  myVar = 'I heart Angular';

  myArr = ['Dan', 'Lindsey', 'Hazel', 'Ada'];

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';

  theClass = 'blueText';

  blueOrNot = false;

  myEvent(x) {
    console.log(x);
    this.makeAdaDisappear();
  }

  makeAdaDisappear() {
    this.myArr = ['Dan', 'Lindsey', 'Hazel', ''];
  }

  constructor(private dataService: DataService, private http: Http) {

  }

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  myGet() {
    this.http.get('https://httpbin.org/get')
      .subscribe(res => console.log(res.json()))
  }

  myGetAsPromise() {

  }

}
