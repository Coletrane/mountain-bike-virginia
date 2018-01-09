import * as routes from "../routes"

export const headTags = (title, desc, keywords, post) => {
  let metas = [
    {name: "description", content: desc},
    {name: "keywords", content: keywords},
    {name: "og:title", content: title},
    {name: "og:description", content: desc},
    {name: "og:type", content: "website"}
  ]
  if (post.route) {
    metas.push({
      name: "og:url", content: `${routes.baseUrl}/${post.route}`
    })
  }
  if (post.imgSrc || post.img) {
    let fbImg = {
      name: "og:image"
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
