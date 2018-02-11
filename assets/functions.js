import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'

export const headTags = (title, desc, keywords, post) => {
  let metas = [
    {name: 'description', content: desc},
    {name: 'keywords', content: keywords},
    {property: 'og:title', content: title},
    {property: 'og:description', content: desc},
    {property: 'og:type', content: 'article'}
  ]

  // '' is for the base url so we don't add another slash
  if (post.route || post.route === '') {
    metas.push({
      property: 'og:url', content: `${routes.baseUrl}/${post.route}`
    })
  }

  let fbImg = {
    property: 'og:image'
  }

  if (post.route === '') {
    fbImg.content = `${routes.s3StaticImg}${routes.imgRoutes['/']}`
  } else {
    fbImg.content = `${routes.s3Pages}${post.route}/${routes.imgRoutes[post.route]}`
  }

  metas.push(fbImg)

  return {
    title: title,
    meta: metas
  }
}

// helpers for extracting filenamesn
export const noExtension = (file) => {
  let filename
  resImg.supportedImgFormats.forEach((format) => {
    if (file.endsWith(format)) {
      filename = file.split(format)[0]
    }
  })

  return filename
}

export const justExtension = (file) => {
  let extension
  resImg.supportedImgFormats.forEach((format) => {
    if (file.endsWith(format)) {
      const extensionStart = file.indexOf(format)
      extension = file.slice(extensionStart)
    }
  })

  return extension
}
