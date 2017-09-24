import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
export class App {

  configureRouter(config, router) {
    config.title = 'Mountain Bike Virginia';
    config.map([
      {
        route: ['', 'blog'],
        name: 'blog',
        moduleId: PLATFORM.moduleName('./pages/blog'),
        nav: true,
        title: 'Blog'
      },
      {
        route: 'race',
        name: 'race',
        moduleId: PLATFORM.moduleName('./pages/race'),
        nav: true,
        title: 'Race!'
      }
    ]);

    this.router = router;
  }
}
