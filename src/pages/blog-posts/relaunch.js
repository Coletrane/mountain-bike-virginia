import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Relaunch {
  constructor(Router) {
    this.router = Router;
  }
}
