import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'

// TODO: change this to accept a route
export const headTags = (title, desc, keywords, post) => {
  let metas = [
    {name: 'description', content: desc},
    {name: 'keywords', content: keywords},
    {property: 'og:title', content: title},
    {property: 'og:description', content: desc},
    {property: 'og:type', content: 'article'}
  ]

  if (post.route || post.route === '') {
    let fbUrl = {
      property: 'og:url'
    }

    if (post.route) {
      fbUrl.content = `${routes.baseUrl}/${post.route}/`
    } else if (post.route === '') {
      fbUrl.content = `${routes.baseUrl}/`
    }

    metas.push(fbUrl)
  }

  if (post.route || post.route === '') {
    let fbImg = {
      property: 'og:image'
    }

    if (!post.ogImage) {
      if (post.route === '') {
        fbImg.content = `${routes.s3StaticImg}${routes.imgRoutes['/']}`
      } else {
        let splitUrl = post.route.split('/')

        // FIXME: this only works one level deep
        if (splitUrl.length > 1) {
          fbImg.content = `${routes.s3Pages}${splitUrl[0]}/${routes.imgRoutes[post.route]}`
        } else {
          fbImg.content = `${routes.s3Pages}${post.route}/${routes.imgRoutes[post.route]}`
        }
      }
    } else {
      fbImg.content = post.ogImage
    }
    metas.push(fbImg)
  }

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
