import { baseUrl, s3StaticImg, s3Pages } from "../../routes"
import * as resImg from "../../constants"
import { schemaTypes, schemaOrg } from "./schmea-types"
import { results } from "./head-tags"
import axios from "axios"

export const headTags = (title, desc, keywords, post) => {
  let metas = [
    { name: "description", content: desc },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "article" }
  ]

  // remove all except one trailing slash /
  let urlSplit = `${post.route}`.split("/")
  urlSplit.forEach((chunk, i, arr) => {
    if (chunk === "") {
      urlSplit.splice(i, 1)
    }
  })
  let ogUrl = `${baseUrl}/${urlSplit.join("/")}`
  // add a slash on the end so facebook doesn't get redirected
  if (post.route !== "/") {
    ogUrl = ogUrl + "/"
  }

  metas.push({
    property: "og:url",
    content: ogUrl
  })

  metas.push({
    property: "og:image",
    content: getImageRoute(post)
  })

  let schema
  // Building video schema in Youtube component since it needs to call the YouTube API
  if (post.schema) {
    if (post.schema.type === schemaTypes.article) {
      schema = buildArticle(post, desc)
    } else if (post.schema.type === schemaTypes.event) {
      if (post.promo) {
        schema = buildEvent(post, post.promo)
      } else {
        schema = buildEvent(post, desc)
      }
    } else if (post.schema.type === schemaTypes.review) {
      schema = buildReview(post, desc)
    }
  } else if (
    post.route === "/" ||
    post.route.includes("xxc-va-race-series") ||
    post.route === "trails"
  ) {
    schema = buildOrganization()
  } else if (post.route.includes("results")) {
    schema = buildDataset(post)
  }

  let head = {
    title: title,
    meta: metas
  }

  if (schema) {
    // Get rid of &quot
    head.__dangerouslyDisableSanitizers = ["script"]
    head.script = [getSchemaObj(schema)]
  }

  if (post.route === "events/creature-from-carvins-cove-2018") {
    head.__dangerouslyDisableSanitizers = ["script"]
    head.script = buildCreatureEventsScript(post)
  }

  // Disable sanitizers for video head()
  if (post.ytSrc) {
    head.__dangerouslyDisableSanitizers = ["script"]
  }

  return head
}

const getImageRoute = post => {
  if (post.ogImage) {
    if (post.route === "/" || post.route.startsWith("xxc-va-race-series")) {
      return post.ogImage
    } else if (post.route.startsWith("results/")) {
      return `${s3Pages}/results/${post.ogImage}`
    } else {
      return `${s3Pages}/${post.route}/${post.ogImage}`
    }
  } else {
    return `${s3Pages}/${post.route}/${post.imgRoute}`
  }
}

export const getSchemaObj = schema => {
  return {
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema)
  }
}

const logoSrc = `${s3StaticImg}/mtbva-big.png`

// Functions for building schema.org objects
const buildArticle = (post, desc) => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.article,
    mainEntityOfPage: {
      "@type": schemaTypes.article,
      "@id": `${baseUrl}${post.route}`,
      author: post.author.name,
      datePublished: new Date(post.date).toISOString(),
      headline: post.title,
      image: getImageRoute(post),
      publisher: {
        "@type": schemaTypes.org,
        name: "Mountain Bike Virginia",
        logo: {
          "@type": schemaTypes.image,
          url: logoSrc
        }
      },
      dateModified: new Date(post.date).toISOString()
    },
    headline: post.title,
    image: getImageRoute(post),
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": schemaTypes.person,
      name: post.author.name
    },
    description: desc,
    publisher: {
      "@type": schemaTypes.org,
      name: "Mountain Bike Virginia",
      logo: {
        "@type": schemaTypes.image,
        url: logoSrc
      }
    }
  }

  return schema
}

// This gets built asyncronysloy on a per page basis
const ytApi = "https://content.googleapis.com/youtube/v3/videos"
export const buildVideo = async post => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.video,
    description: post.description || post.subtitle,
    name: post.title,
    embedUrl: post.ytSrc,
    contentUrl: post.ytSrc.split("/embed").join("")
  }

  let ytId = post.ytSrc.split("/")
  ytId = ytId[ytId.length - 1]

  try {
    let res = await axios.get(ytApi, {
      params: {
        key: process.env.google,
        id: ytId,
        part: "snippet"
      }
    })
    if (res.status === 200 || res.data.items.length > 0) {
      schema.thumbnailUrl = [res.data.items[0].snippet.thumbnails.default.url]

      schema.uploadDate = res.data.items[0].snippet.publishedAt
    }
  } catch (err) {
    console.log(err)
  }

  schema["@context"] = schemaOrg
  return [getSchemaObj(schema)]
}

const buildEvent = (post, desc) => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.event,
    name: post.title,
    startDate: new Date(post.schema.startDate || post.date).toISOString(),
    location: {
      ...post.schema.location,
      "@type": schemaTypes.place
    },
    image: getImageRoute(post),
    description: desc
  }

  return schema
}

const buildCreatureEventsScript = post => {
  const enduroPost = {
    route: post.route,
    imgRoute: "creatureduro.jpg",
    title: "Creatureduro: Carvins Cove Enduro Mountain Bike Race",
    schema: {
      "@context": schemaOrg,
      type: schemaTypes.event,
      startDate: new Date("Oct 6, 2018"),
      location: {
        name: "Sherwood Archery Inc.",
        address: {
          "@type": schemaTypes.address,
          streetAddress: "2720 Timberview Rd",
          addressLocality: "Roanoke",
          postalCode: "24019",
          addressRegion: "VA",
          addressCountry: "US"
        }
      }
    }
  }
  const xxcPost = {
    route: post.route,
    imgRoute: post.imgRoute,
    title:
      "Virginia's Blue Ridge, Creature from Carvins Cove XC and XXC Marathon Mountain Bike Race",
    schema: {
      "@context": schemaOrg,
      type: schemaTypes.event,
      startDate: new Date("Oct 7, 2018"),
      location: {
        name: "Carvins Cove Reservoir Boat Dock",
        address: {
          "@type": schemaTypes.address,
          streetAddress: "9644 Reservoir Rd",
          addressLocality: "Roanoke",
          postalCode: "24019",
          addressRegion: "VA",
          addressCountry: "US"
        }
      }
    }
  }

  return [
    getSchemaObj(buildEvent(enduroPost, post.promo)),
    getSchemaObj(buildEvent(xxcPost, post.promo))
  ]
}

const buildReview = (post, desc) => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.review,
    author: {
      "@type": schemaTypes.person,
      name: post.author.name
    },
    url: `${baseUrl}${post.route}`,
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      "@type": schemaTypes.org,
      name: "Mountain Bike Virginia",
      sameAs: baseUrl
    },
    description: desc,
    itemReviewed: {
      "@type": schemaTypes.product,
      ...post.schema.itemReviewed
    },
    reviewRating: {
      "@type": schemaTypes.rating,
      ...post.schema.reviewRating
    }
  }

  return schema
}

const buildOrganization = () => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.org,
    url: baseUrl,
    logo: logoSrc,
    contactPoint: {
      "@type": schemaTypes.contact,
      telephone: "+1-540-529-1426",
      contactType: "customer service"
    }
  }

  return schema
}

const buildDataset = post => {
  let schema = {
    "@context": schemaOrg,
    "@type": schemaTypes.dataset,
    name: "Mountain Bike Virginia XXC VA Bike Race Results",
    description: results.description,
    url: `${baseUrl}${post.route}`,
    sameAs: `${baseUrl}/results`,
    keywords: [results.keywords],
    creator: {
      "@type": schemaTypes.org,
      url: baseUrl,
      name: "Mountain Bike Virginia XXC VA Series",
      telephone: "+1-540-529-1426",
      email: "eloc49@gmail.com"
    }
  }

  return schema
}

// helpers for extracting filenamesn
export const noExtension = file => {
  let filename
  resImg.supportedImgFormats.forEach(format => {
    if (file.endsWith(format)) {
      filename = file.split(format)[0]
    }
  })

  return filename
}

export const justExtension = file => {
  let extension
  resImg.supportedImgFormats.forEach(format => {
    if (file.endsWith(format)) {
      const extensionStart = file.indexOf(format)
      extension = file.slice(extensionStart)
    }
  })

  return extension
}

export const routeToComponentFilename = route => {
  let postFilename = route.split("-")
  postFilename = postFilename.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  postFilename = postFilename.join("")

  if (postFilename.includes("/")) {
    postFilename = postFilename.split("/")
    postFilename = postFilename.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    postFilename = postFilename.join("/")
  }

  return postFilename
}

export const getRoute = matched => {
  let route
  if (matched.length === 1) {
    return matched[0].path.slice(1)
  } else {
    throw new Error("route.matched has nothing!")
  }
}
