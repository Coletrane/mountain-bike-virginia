import { s3StaticImg, baseUrl } from "scripts/routes"
import { Post } from "./Post"
import { getImageRoute } from "assets/functions"

export enum SchemaTypes {
  ARTICLE = "NewsArticle",
  VIDEO = "VideoObject",
  EVENT = "Event",
  REVIEW = "Review",
  BLOG = "Blog",
  PERSON = "Person",
  ORG = "Organization",
  IMAGE = "ImageObject",
  PLACE = "Place",
  ADDRESS = "PostalAddress",
  PRODUCT = "Product",
  RATING = "Rating",
  CONTACT = "ContactPoint",
  DATASET = "Dataset"
}
const PUBLISHER = {
  "@type": SchemaTypes.ORG,
  name: "Mountain Bike Virginia",
  logo: {
    "@type": SchemaTypes.IMAGE,
    url: `${s3StaticImg}/mtbva-big.png`
  }
}

export class MetaSchema {
  readonly "@type": SchemaTypes

  constructor(readonly type: SchemaTypes) {
    this["@type"] = type
  }
}

export abstract class Schema extends MetaSchema {
  // Don't need to store this in JSON
  readonly "@context" = "http://schema.org"
}

export class ArticleSchema extends Schema {
  readonly mainEntityOfPage: MainEntityOfPage
  readonly headline: string
  readonly image: string
  readonly datePublished: string
  readonly dateModified: string
  readonly author: SchemaAuthor
  readonly description: string
  readonly publisher = PUBLISHER

  constructor(post: Post) {
    super(SchemaTypes.ARTICLE)
    this.mainEntityOfPage = new MainEntityOfPage(post)
    this.headline = post.title
    this.image = getImageRoute(post)
    this.datePublished = new Date(post.date).toISOString()
    this.dateModified = new Date(post.date).toISOString()
    this.author = new SchemaAuthor(post.author.name)
    this.description = post.description
  }
}

class MainEntityOfPage {
  readonly "@type": SchemaTypes.ARTICLE
  readonly "@id": string
  readonly author: string
  readonly datePublished: string
  readonly dateModified: string
  readonly headline: string
  readonly publisher = PUBLISHER

  constructor(post: Post) {
    this["@id"] = `${baseUrl}/${post.category}/${post.route}`
    this.author = post.author.name
    this.datePublished = new Date(post.date).toISOString()
    this.dateModified = new Date(post.date).toISOString()
    this.headline = post.title
  }
}

class SchemaAuthor extends MetaSchema {
  constructor(readonly name: string) {
    super(SchemaTypes.PERSON)
  }
}
