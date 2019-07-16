// Render an Observable with the Async Pipe

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{clock | async}}</h1> 
  `
})
export class AppComponent  {

  clock = Observable.interval(1000);

  constructor(){
    this.clock.subscribe(console.log.bind(console));
    // Now we're logging out to the console each second cuz async in the template is simply doing a subscribe on this Observable (the clock)
  }

}
