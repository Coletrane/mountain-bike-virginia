import { Router } from 'aurelia-router';
import {CssAnimator} from 'aurelia-animator-css';
import { PLATFORM } from 'aurelia-pal';
import {inject} from 'aurelia-framework';

require('../node_modules/bulma/css/bulma.css');
require('./resources/styles.css');

@inject(CssAnimator)
export class App {

  constructor(CssAnimator) {
    this.animator = CssAnimator;
  }

  configureRouter(config, router) {
    config.title = 'Mountain Bike Virginia';
    config.map([
      {
        route: ['', 'blog'],
        name: 'blog',
        moduleId: PLATFORM.moduleName('./pages/blog'),
        nav: true,
      },
      {
        route: 'results',
        name: 'results',
        moduleId: PLATFORM.moduleName('./pages/results'),
        nav: true,
      },
      {
        route: 'relaunch',
        name: 'relaunch',
        moduleId: PLATFORM.moduleName('./pages/blog-posts/relaunch'),
        nav: true,
      }
    ]);

    this.router = router;
  }

  get currentRoute() {
    if (this.router.currentInstruction) {
      return this.router.currentInstruction.config.name;
    }
  }
}
