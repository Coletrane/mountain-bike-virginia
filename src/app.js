import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
require('../node_modules/bulma/css/bulma.css');
require('./resources/styles.css');
export class App {

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
        route: 'race-ride',
        name: 'race-ride',
        moduleId: PLATFORM.moduleName('./pages/race'),
        nav: true,
      }
    ]);

    this.router = router;
  }
}
