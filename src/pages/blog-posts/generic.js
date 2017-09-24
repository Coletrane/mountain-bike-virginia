export class Generic {

  activate(post) {
    this.title = post.title;
    this.subtitle = post.subtitle;
    this.content = post.content;
    this.links = post.links;
    this.fb = post.fb;
  }
}