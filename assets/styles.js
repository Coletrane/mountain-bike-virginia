// big shortcoming of Vue here, I'm unable to use these sizes or media queries
// without an external library or passing css strings around
export const sizes = {
  ceiling: 99999,
  desktop: 1200,
  dablet: 1000,
  tablet: 750,
  phablet: 575,
  phone: 450
}

export const mediaQuery = (size, css) => {
  // For font size difference compatability
  const emSize = size/16
  return `@media max-width(${emSize}em {
    ${css}
  }`
}

export const boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
