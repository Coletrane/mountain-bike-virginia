import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import {s3, s3StaticImg} from '../routes'

Vue.use(VueLazyload,{
  error: `${s3}${s3StaticImg}error.png`,
  loading: `${s3}${s3StaticImg}loading.gif`
})

Vue.use(VueLazyload)
