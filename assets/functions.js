import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'
import {schemaTypes} from './posts'

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
      property: 'og:image',
      content: getImageRoute(post)
    }
    metas.push(fbImg)
  }

  let schema
  if (post.schema) {
    if (post.schema.type === schemaTypes.article) {
      schema = buildArticle(post, desc)
    }
    // global properties for all schemas
  } else if (post.route === '') {
    // Home
  } else if (post.route.includes('results')) {
    // Results
  }

  if (schema) {
    schema['@context'] = 'http://schema.org/'
  }

  return {
    title: title,
    meta: metas,
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  }
}

const getImageRoute = (post) => {
  let result

  if (post.route === '') {
    result = `${routes.s3StaticImg}${routes.imgRoutes['/']}`
  } else {
    let splitUrl = post.route.split('/')

    // FIXME: this only works one level deep
    if (splitUrl.length > 1) {
      result = `${routes.s3Pages}${splitUrl[0]}/${routes.imgRoutes[post.route]}`
    } else {
      result = `${routes.s3Pages}${post.route}/${routes.imgRoutes[post.route]}`
    }
  }

  return result
}

const logoSrc = `${routes.s3StaticImg}/mtbva.png`

// Functions for building schema.org objects
const buildArticle = (post, desc) => {
  let schema = {}
  schema['@type'] = schemaTypes.article
  schema.mainEntityOfPage = {}
  schema.mainEntityOfPage['@type'] = post.schema.mainEntityOfPage.type
  schema.mainEntityOfPage['@id'] = `${routes.baseUrl}${post.route}`
  schema.headline = post.title
  schema.image = getImageRoute(post)
  if (post.date) {
    schema.datePublished = post.date
    schema.dateModified = post.date
  }
  schema.author = {}
  schema.author['@type'] = schemaTypes.person
  schema.author.name = post.author.name
  schema.description = desc
  schema.publisher = {}
  schema.publisher['@type'] = schemaTypes.org
  schema.publisher.name = 'Mountain Bike Virginia'
  schema.publisher.logo = {}
  schema.publisher.logo['@type'] = schemaTypes.image
  schema.publisher.logo.url = logoSrc

  return schema
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
