export class Results {

  divide(classes) {
    let result = [];
    let size = 2;
    for (let i = 0; i < classes.length; i += size) {
      result.push(classes.slice(i, i+ size));
    }

    return result;
  }
}
