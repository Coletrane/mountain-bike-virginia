import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class Blog {

  constructor(Router) {
    this.router = Router;
  }
}
