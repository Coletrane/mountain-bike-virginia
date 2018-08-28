export default {
  components: {
    MTBVAHeader: () =>
      import(/*webpackChunkName:'layout-components'*/ "../components/Header/MTBVAHeader"),
    MTBVAFooter: () =>
      import(/*webpackChunkName:'layout-components'*/ "../components/Footer/MTBVAFooter"),
    MTBVAMenu: () =>
      import(/*webpackChunkName:'layout-components'*/ "../components/Header/MTBVAMenu"),
    Navigation: () =>
      import(/*webpackChunkName:'layout-components'*/ "../components/Header/Navigation"),
    Banner: () =>
      import(/*webpackChunkName:'layout-components'*/ "../components/Das/Banner")
  }
}
