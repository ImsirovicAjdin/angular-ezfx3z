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

}
