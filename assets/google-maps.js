export const googleMapsScriptExists = () => {
  let googleMapsScript

  let scripts = document.getElementsByTagName('script')
  if (scripts) {
    scripts = Array.prototype.slice.call(scripts)
    if (scripts.length > 0) {
      googleMapsScript = scripts.find(script => script.src.includes('maps.googleapis.com'))
    }
  }

  return googleMapsScript
}
