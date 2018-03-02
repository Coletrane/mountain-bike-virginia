import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'
import {schemaTypes} from './posts'
import axios from 'axios'

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
    } else if (post.schema.type === schemaTypes.video) {
      schema = buildVideo(post, desc)
    } else if (post.schema.type === schemaTypes.event) {
      schema = buildEvent(post, desc)
    } else if (post.schema.type === schemaTypes.review) {
      schema = buildReview(post, desc)
    }
  } else if (post.route === '') {
    // Home
  } else if (post.route.includes('results')) {
    // Results
  }

  let head = {
    title: title,
    meta: metas
  }

  if (schema) {
    schema['@context'] = 'http://schema.org/'
    head.script = []
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema)
    })
  }

  return head
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
  schema.datePublished = post.date
  schema.dateModified = post.date
  schema.author = {
    name: post.author.name
  }
  schema.author['@type'] = schemaTypes.person
  schema.description = desc
  schema.publisher = {
    name: 'Mountain Bike Virginia',
    logo: {
      url: logoSrc
    }
  }
  schema.publisher['@type'] = schemaTypes.org
  schema.publisher.logo['@type'] = schemaTypes.image

  return schema
}

const ytApi = 'https://content.googleapis.com/youtube/v3/videos'
const buildVideo = (post, desc) => {
  let schema = {}
  schema['@type'] = schemaTypes.video
  schema.description = desc
  schema.name = post.title
  schema.embedUrl = post.ytSrc

  let ytId = post.ytSrc.split('/')
  ytId = ytId[ytId.length - 1]
  axios.get(ytApi, {
    params: {
      id: ytId,
      part: 'snippet'
    }
  })

  return schema
}

const buildEvent = (post, desc) => {
  let schema = {}
  schema['@type'] = schemaTypes.event
  schema.name = post.title
  schema.startDate = post.schema.startDate
  schema.location = {...post.schema.location}
  schema.location['@type'] = schemaTypes.place
  schema.image = getImageRoute(post)
  schema.description = desc

  return schema
}

const buildReview = (post, desc) => {
  let schema = {}
  schema['@type'] = schemaTypes.review
  schema.author = {
    name: post.author.name
  }
  schema.author['@type'] = schemaTypes.person
  schema.url = `${routes.baseUrl}${post.route}`
  schema.datePublished = post.date
  schema.publisher = {
    name: 'Mountain Bike Virginia',
    sameAs: routes.baseUrl
  }
  schema.publisher['@type'] = schemaTypes.org
  schema.description = desc
  schema.itemReviewed = {...post.schema.itemReviewed}
  schema.itemReviewed['@type'] = schemaTypes.product
  schema.reviewRating = {...post.schema.reviewRating}
  schema.reviewRating['@type'] = schemaTypes.rating

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
