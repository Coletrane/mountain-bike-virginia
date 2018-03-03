import * as routes from '../scripts/routes'
import * as resImg from '../scripts/responsive-imgs.config'
import {schemaTypes, schemaOrg} from './schmea-types'
import {results} from './head-tags'
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
  // Building video schema in Youtube component since it needs to call the YouTube API
  if (post.schema) {
    if (post.schema.type === schemaTypes.article) {
      schema = buildArticle(post, desc)
    } else if (post.schema.type === schemaTypes.event) {
      schema = buildEvent(post, desc)
    } else if (post.schema.type === schemaTypes.review) {
      schema = buildReview(post, desc)
    }
  } else if (post.route === '') {
    schema = buildOrganization()
  } else if (post.route.includes('results')) {
    schema = buildDataset(post)
  }

  let head = {
    title: title,
    meta: metas
  }

  if (schema) {
    // Get rid of &quot
    head.__dangerouslyDisableSanitizers = ['script']
    head.script = [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  }

  // Disable sanitizers for video head()
  if (post.ytSrc) {
    head.__dangerouslyDisableSanitizers = ['script']
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

const logoSrc = `${routes.s3StaticImg}/mtbva-big.png`

// Functions for building schema.org objects
const buildArticle = (post, desc) => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.article,
    mainEntityOfPage: {
      '@type': schemaTypes.article,
      '@id': `${routes.baseUrl}${post.route}`,
      author: post.author.name,
      datePublished: post.date,
      headline: post.title,
      image: getImageRoute(post),
      publisher: {
        '@type': schemaTypes.org,
        name: 'Mountain Bike Virginia',
        logo: {
          '@type': schemaTypes.image,
          url: logoSrc
        }
      },
      dateModified: post.date
    },
    headline: post.title,
    image: getImageRoute(post),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': schemaTypes.person,
      name: post.author.name
    },
    description: desc,
    publisher: {
      '@type': schemaTypes.org,
      name: 'Mountain Bike Virginia',
      logo: {
        '@type': schemaTypes.image,
        url: logoSrc
      }
    }
  }

  return schema
}

// This gets built asyncronysloy on a per page basis
const ytApi = 'https://content.googleapis.com/youtube/v3/videos'
export const buildVideo = async (post) => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.video,
    description: post.description || post.subtitle,
    name: post.title,
    embedUrl: post.ytSrc,
    contentUrl: post.ytSrc.split('/embed').join('')
  }

  let ytId = post.ytSrc.split('/')
  ytId = ytId[ytId.length - 1]
  let res = await axios.get(ytApi, {
    params: {
      key: process.env.youTube,
      id: ytId,
      part: 'snippet'
    }
  })

  if (res.status === 200) {
    schema.thumbnailUrl = [
      res.data.items[0].snippet.thumbnails.default.url
    ]

    schema.uploadDate = res.data.items[0].snippet.publishedAt
  }

  schema['@context'] = 'http://schema.org/'
  return [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema)
    }
  ]
}

const buildEvent = (post, desc) => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.event,
    name: post.title,
    startDate: post.schema.startDate,
    location: {
      '@type': schemaTypes.place,
      ...post.schema.location
    },
    image: getImageRoute(post),
    description: desc
  }

  return schema
}

const buildReview = (post, desc) => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.review,
    author: {
      '@type': schemaTypes.person,
      name: post.author.name
    },
    url: `${routes.baseUrl}${post.route}`,
    datePublished: post.date,
    publisher: {
      '@type': schemaTypes.org,
      name: 'Mountain Bike Virginia',
      sameAs: routes.baseUrl
    },
    description: desc,
    itemReviewed: {
      '@type': schemaTypes.product,
      ...post.schema.itemReviewed
    },
    reviewRating: {
      '@type': schemaTypes.rating,
      ...post.schema.reviewRating
    }
  }

  return schema
}

const buildOrganization = () => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.org,
    url: routes.baseUrl,
    logo: logoSrc,
    contactPoint: {
      '@type': schemaTypes.contact,
      telephone: '+1-540-529-1426',
      contactType: 'customer service'
    }
  }

  return schema
}

const buildDataset = (post) => {
  let schema = {
    '@context': schemaOrg,
    '@type': schemaTypes.dataset,
    name: 'Mountain Bike Virginia XXC VA Bike Race Results',
    description: results.description,
    url: `${routes.baseUrl}${post.route}`,
    sameAs: `${routes.baseUrl}/results`,
    keywords: [
      results.keywords
    ],
    creator: {
      '@type': schemaTypes.org,
      url: routes.baseUrl,
      name: 'Mountain Bike Virginia XXC VA Series',
      telephone: '+1-540-529-1426',
      email: 'eloc49@gmail.com'
    }
  }

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
