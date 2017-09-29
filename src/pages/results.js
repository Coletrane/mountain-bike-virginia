import * as results from '../resources/results.json';

export class Results {

  constructor() {
    this.results = results;
    this.results.races.forEach(race => {
      this.dividedIntoThrees = this.divideIntoThrees(race.classes)
    })
  }

  divideIntoThrees(classes) {
    let result = [];
    let size = 2;
    for (let i = 0; i < classes.length; i += size) {
      result.push(classes.slice(i, i+ size));
    }

    return result;
  }
}
