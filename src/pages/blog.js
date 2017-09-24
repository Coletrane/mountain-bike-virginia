export class Blog {

  constructor() {
    this.posts = this.initPostList();
  }

  initPostList() {
    return [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/embed/656HZ2mYpc0'
      }
    ]
  }
}