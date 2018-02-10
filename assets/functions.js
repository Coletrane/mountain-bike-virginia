import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'

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
