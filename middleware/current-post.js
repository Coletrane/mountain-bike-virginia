export default function({store, route}) {
  if (route.name === 'index') {
    store.dispatch('setCurrentPost', {})
  }
}