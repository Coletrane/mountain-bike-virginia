import {CssAnimator} from 'aurelia-animator-css';
import { PLATFORM } from 'aurelia-pal';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

let bulma = require('../node_modules/bulma/css/bulma.css');
let css = require('./resources/styles.css');

@inject(CssAnimator, EventAggregator)
export class App {

  constructor(CssAnimator, EventAggregator) {
    this.animator = CssAnimator;
    this.events = EventAggregator;
    this.events.subscribe('router:navigation:complete', payload => window.scrollTo(0, 0));
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
        moduleId: PLATFORM.moduleName('./pages/results', 'results'),
        nav: true,
      },
      {
        route: 'relaunch',
        name: 'relaunch',
        moduleId: PLATFORM.moduleName('./pages/relaunch', 'relaunch'),
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
