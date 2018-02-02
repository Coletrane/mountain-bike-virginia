import * as routes from '../routes'
import * as resImg from '../responsive-imgs.config'

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

