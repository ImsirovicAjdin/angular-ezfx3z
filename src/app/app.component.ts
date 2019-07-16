// Render an Observable with the Async Pipe

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  template: `
    <h1>{{message}}</h1>
  `
})
export class AppComponent  {
  //name = 'Hello, world';
  clock = Observable.interval(1000); // Observable with interval of 1 sec
  // clock = Observable.interval(1000) throws: 
  // ERROR Error: Observable_1.Observable.interval is not a function
  // That means you need to import every method on Observable by itself
  // After importing 'interval' you see the console error is gone
}
