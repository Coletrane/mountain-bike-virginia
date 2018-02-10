import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import {s3StaticImg} from '../scripts/routes'

Vue.use(VueLazyload, {
  error: `${s3StaticImg}error.png`,
  loading: `${s3StaticImg}loading.gif`,
  observer: true,
  observerOptions: {
    rootMargin: '1500px',
    threshold: 0
  }
})

Vue.use(VueLazyload)
