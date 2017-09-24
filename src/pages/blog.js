export class Blog {

  constructor() {
    this.posts = this.initPostList();
  }

  initPostList() {
    return [
      {
        type: 'generic',
        title: 'Creature from Carvins Cove',
        subtitle: 'Oct 1st, 2017',
        content: 'Once again the Creature that slithered out of the depths of       Carvins Cove is upon us.',
        links: [
          {
            url: 'https://apm.activecommunities.com/roanokeparksrec/Activity_Search/7122',
            words: 'Register for the 15 mile XC '
          },
          {
            url: null,
            words: 'or'
          },
          {
            url: 'https://www.bikereg.com/creature',
            words: 'wrangle the Creature and register for the 42 mile XXC'
          }
        ],
        fb: 'yo'
      },
      {
        type: 'youtube',
        url: 'https://www.youtube.com/embed/656HZ2mYpc0'
      }
    ]
  }
}