import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Creature2017 {
  constructor(Router) {
    this.router = Router;
  }
}