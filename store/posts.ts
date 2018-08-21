import { ActionContext } from "vuex"
import axios from "axios"

import { s3Posts, s3Routes } from "../scripts/routes"
import { MTBVAState } from "./index"
import { Post, PostCategories } from "../models/Post"
import { Author } from "../models/Author"
import { MetaSchema, SchemaTypes } from "../models/Schema"

type PostContext = ActionContext<PostState, MTBVAState>

export class PostState {
  loadedPosts: Array<Post>
  currentPost: string
  loadedPages: Array<Array<String>>
  currentPage: number
}

export enum PostActions {
  loadPage = "loadPage",
  loadPosts = "loadPosts",
  setCurrentPost = "setCurrentPost"
}

enum PostMutations {
  POST_LOADED = "POST_LOADED",
  SET_CURRENT_POST = "SET_CURRENT_POST",
  PAGE_LOADED = "PAGE_LOADED",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
}

export const numPages = 3

export default {
  state: new PostState(),

  actions: {
    [PostActions.loadPage]: async (context: PostContext) => {
      let resultRoutes = []

      if (
        context.state.currentPage < numPages &&
        !context.state.loadedPages[context.state.currentPage]
      ) {
        let res = await axios.get(
          `${s3Routes}/${context.state.currentPage}.json`
        )
        if (res.data) {
          resultRoutes = res.data
          context.commit(PostMutations.PAGE_LOADED, {
            routes: resultRoutes
          })

          return await context.dispatch(PostActions.loadPosts, resultRoutes)
        }
      }
    },
    [PostActions.loadPosts]: async (
      context: PostContext,
      postsRoutes: Array<string>
    ) => {
      let resultPosts = []

      for (let route: string of postsRoutes) {
        if (!context.getters.posts(route)) {
          let res = await axios.get(`${s3Posts}/${route}.json`)
          const category = route.split("/")[0]
          const path = route.split("/")[1]
          if (res.data) {


            let author
            if (res.data.author) {
              let authors = new Array<Author>()
              for (const author of res.data.author.split(" ")) {
                await context.dispatch("loadAuthor", author)
                authors.push(context.getters.getAuthor(author))
              }
              if (authors.length === 1) {
                author = authors[0]
              } else {
                author = authors
              }
            }

            let post = new Post(
              PostCategories[category.toUpperCase()],
              path,
              res.data.title,
              res.data.subtitle,
              new Author(
                res.data.imgUrl
              )
            res.data.description,
              new Date(res.data.date),
              res.data.imgRoute,
              res.data.relatedPosts,
              res.data.keywords,
              new MetaSchema(res.data.schema.type)
          )
            if (res.data.ytSrc) {
              post =
            } else {

            }

            resultPosts.push(post)

            context.commit(PostMutations.POST_LOADED, post)
          }
        } else {
          resultPosts.push(context.getters.posts(route))
        }
      }

      if (resultPosts.length === 1) {
        return resultPosts[0]
      } else if (resultPosts.length > 1) {
        return resultPosts
      }
    },
    [PostActions.setCurrentPost]: (context: PostContext, postRoute: string) => {
      if (
        !context.state.currentPost ||
        context.state.currentPost.route !== postRoute
      ) {
        context.commit(PostMutations.SET_CURRENT_POST, postRoute)
      }
    }
  },

  mutations: {
    [PostMutations.POST_LOADED]: (state: PostState, post: Post) => {
      state.loadedPosts.push(post)
    },
    [PostMutations.SET_CURRENT_POST]: (state: PostState, postRoute: string) => {
      state.currentPost = postRoute
    },
    [PostMutations.PAGE_LOADED]: (state: PostState, page: Array<String>) => {
      state.loadedPages[state.currentPage] = page
      state.currentPage += 1
    },
    [PostMutations.SET_CURRENT_PAGE]: (state: PostState, page: number) => {
      state.currentPage = page
    }
  },

  getters: {
    posts: state => routes => {
      let posts = []
      if (!Array.isArray(routes)) {
        routes = [routes]
      }

      routes.forEach(route => {
        let foundPost = state.loadedPosts.find(post => post.route === route)
        if (foundPost) {
          posts.push(foundPost)
        }
      })

      if (posts.length <= 1) {
        return posts[0]
      } else {
        return posts
      }
    }
  }
}
