import * as routes from '../routes'
// not sure why I have to require this, but can import routes.js
const resImg = require('../responsive-imgs.config')

export const headTags = (title, desc, keywords, post) => {
  let metas = [
    {name: 'description', content: desc},
    {name: 'keywords', content: keywords},
    {name: 'og:title', content: title},
    {name: 'og:description', content: desc},
    {name: 'og:type', content: 'website'}
  ]
  if (post.route) {
    metas.push({
      name: 'og:url', content: `${routes.baseUrl}/${post.route}`
    })
  }
  if (post.imgSrc || post.img) {
    let fbImg = {
      name: 'og:image'
    }

    if (post.imgSrc) {
      fbImg.content = `${routes.s3}/${post.imgSrc}`
    } else if (post.img) {
      fbImg.content = post.img
    }

    metas.push(fbImg)
  }

  return {
    title: title,
    meta: metas
  }
}

export const makeTwoDimensional = (elements) => {
  let result = []

  elements.forEach((elem, i, arr) => {
    if (i % 2 === 0) {
      result.push([
        elements[i],
        elements[i + 1]
      ])
    }
  })

  return result
}

export const srcset = (src) => {
  resImg.supportedImgFormats.forEach((format) => {
    let filename = resImg.noExtension(src)
    if (resImg.justExtension(src) === format) {
      return `${filename}-${resImg.phone}${format} ${parseInt(resImg.phone)}w` +
                `${filename}-${resImg.tablet}${format} ${parseInt(resImg.tablet)}w`
    }
  })
}
