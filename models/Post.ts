import { Author} from "~/models/Author"
import { MetaSchema} from "~/models/Schema"

enum PostCategories {
  VIDEOS = "videos",
  EVENTS = "events",
  EXTERNAL = "external",
  REVIEWS = "reviews",
  SHOP = "shop",
  TRAILS = "trails"
}

export class MetaPost {
  constructor(
    readonly category: PostCategories | "",
    readonly route: string
  ) {}
}

export class Post extends MetaPost {
  constructor(
    category: PostCategories,
    route: string,
    readonly title: string,
    readonly subtitle: string,
    readonly author: Author,
    readonly description: string,
    readonly date: Date,
    readonly imgRoute: string,
    readonly relatedPosts: Array<MetaPost>,
    readonly keywords: Array<string>,
    readonly schema: MetaSchema
  ) {
    super(category, route)
  }
}

export class VideoPost extends Post {
  constructor(
    category: PostCategories,
    route: string,
    title: string,
    subtitle: string,
    author: Author,
    description: string,
    date: Date,
    imgRoute: string,
    relatedPosts: Array<MetaPost>,
    keywords: Array<string>,
    schema: MetaSchema,
    readonly ytSrc: string
  ) {
    super(
      category,
      route,
      title,
      subtitle,
      author,
      description,
      date,
      imgRoute,
      relatedPosts,
      keywords,
      schema
    )
  }
}

