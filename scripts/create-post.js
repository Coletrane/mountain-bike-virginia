// Packages
const fs = require('fs')
const path = require('path')
const rl = require('readline-sync')
const sharp = require('sharp')
const imagemin = require('imagemin')  // TODO
const execa = require('execa')
const Listr = require('listr')

// Internal
const constants = require('../constants')
// const buildRoutes = require('./build-routes-json')

const postDir = constants.postDirs[rl.keyInSelect(constants.postDirs, 'What category is this post? ')]
let postRoute
while (!postRoute) {
  postRoute = rl.question('What is this post\'s route? ')
}
let post = {}
while (!post.title) {
  post.title = rl.question('Title: ')
}
while (!post.subtitle) {
  post.subtitle = rl.question('Subtitle: ')
}
while (!post.description) {
  post.description = rl.question('Description: ')
}
while (!fs.existsSync(`./json/authors/${post.author}.json`)) {
  post.author = rl.question('Author: ')
}
while (isNaN(Date.parse(post.date))) {
  post.date = rl.question('Date: ')
}
while (!post.loc) {
  post.loc = rl.question('Location: ')
}
while (!post.imgRoute) {
  post.imgRoute = rl.question('Image Route: ')
}
while (!post.keywords) {
  post.keywords = rl.question('Keywords: ')
}
let numRelatedPosts
while (!numRelatedPosts) {
  numRelatedPosts = rl.question('How many related posts? ')
}
post.relatedPosts = new Array(numRelatedPosts)
post.relatedPosts.forEach((p, i, arr) => {
  while (!fs.existsSync(`./json/posts/${post.relatedPosts[i]}.json`)) {
    post.relatedPosts[i] = rl.question(`related post ${i}: `)
  }
})
if (postDir === 'videos') {
  while (!post.ytSrc) {
    post.ytSrc = rl.question('Youtube Embed URL: ')
  }
} else {
  post.schema = {
    type: 'NewsArticle'
  }
}

const customPromoCard = rl.keyInYN('Would you like a custom Promo Card Component? ')


let taskArr = [
  {
    title: 'Creating JSON File',
    task: () => createPostJson(postDir, postRoute, post)
  },
  {
    title: 'Moving JSON to local S3 bucket',
    task: () => {
      execa('rsync', ['./json/* ../mtbva-s3-bucket;'], ['--checksum --delete -r -v '])
        .stdout.pipe(process.stdout)

    }
  },
  {
    title: 'Creating image directory',
    task: () => createImageDir(postDir, postRoute)
  },
  {
    title: 'Creating responsive images',
    task: () => generateResponsiveImages(postDir, postRoute)
  },
  {
    title: 'Minifying images',
    task: () => {}
  },
  {
    title: 'Creating Post Component',
    task: () => createPostComponent(postDir, postRoute, post)
  }
]

if (customPromoCard) {
  taskArr.push({
    title: 'Create Custom Promo Card',
    task: () => createCustomPromoCard(postDir, postRoute)
  },)
}

const tasks = new Listr(taskArr)

tasks.run()


// File System stuff

const createPostJson = (dir, route, post) => {
  fs.writeFile(
    `./json/posts/${dir}/${route}.json`,
    JSON.stringify(post, null, 2),
    'utf-8',
    (err, data) => {
      if (err) {
        return Promise.reject(err)
      } else {
        return Promise.resolve()
      }
    }
  )
}

const createPostComponent = (dir, route, post) => {
  const templateFile = post.ytSrc ? 'VideoPost.vue' : 'BlogPost.vue'
  fs.readFile(
    `./scripts/Templates/${templateFile}`,
    'utf-8',
    (err, data) => {
      let componentFile = data.replace(`name: '',`, `name: '${route}',`)

      if (!post.ytSrc) {
        let imgTags = []
        let pics = fs.readdirSync(s3ImgDir(dir, route))
        // FIXME: may need to sort by filename instead of mtime
        pics = pics.sort((a, b) => {
          return fs.statSync(`${s3ImgDir(dir, route)}/${a}`).mtime.getTime() -
                 fs.statSync(`${s3ImgDir(dir, route)}/${b}`).mtime.getTime()
        })

        pics.forEach(pic => {
          if ((pic.endsWith('.png') || pic.endsWith('.jpg')) &&
              (!pic.endsWith('-480.png') && !pic.endsWith('-480.jpg') &&
               !pic.endsWith('-720.png') && !pic.endsWith('-720.jpg'))) {
            imgTags.push(`    <blog-image :src="img + '${pic}'"/>`)
          }
        })
        imgTagStrArr = [
          `<div slot="content">`
        ]
        imgTags.forEach(tag => {
          imgTagStrArr.push(`  ${tag}`)
        })

        componentFile = componentFile.replace('<div slot="content">', imgTagStrArr.join('\n'))
      }

      fs.writeFile(
        `./pages/${dir}/${route}.vue`,
        componentFile,
        'utf-8',
        (err, data) => {
          if (err) {
            return Promise.reject(err)
          } else {
            return Promise.resolve()
          }
        }
      )
    }
  )
}

const createCustomPromoCard = (dir, route) => {
  fs.readFile(
    './scripts/Templates/CustomPromoCard.vue',
    'utf-8',
    (err, data) => {
      const componentFile = data.replace(`name: '',`, `name: '${dir}-${route}-promo',`)
      // Vue component naming convention has upper case
      const upperCaseDir = dir.charAt(0).toUpperCase() + dir.slice(1)
      const componentFilename = route.charAt(0).toUpperCase() +
                                route.slice(1) +
                                'Promo.vue'
      fs.writeFile(
        `./components/PromoCards/${upperCaseDir}/${componentFilename}`,
        componentFile,
        'utf-8',
        (err, data) => {
          if (err) {
            return Promise.reject(err)
          } else {
            return Promise.resolve()
          }
        })
    })
}

// Image Processing

const s3ImgDir = (dir, route) => {
  return `../mtbva-s3-bucket/pages/${dir}/${route}`
}

const resImgPath = (dir, route, file, width) => {
  return s3ImgDir(dir, route) +
         '/' + path.basename(file).split('.')[0] +
         '-' + width + path.extname(file)
}

const createImageDir = (dir, route) => {
  if (!fs.existsSync(s3ImgDir(dir, route))) {
    fs.mkdirSync(s3ImgDir(dir, route))
  }

  let confirm
  while (confirm !== postRoute) {
    confirm = rl.question(`Copy the images to ${s3ImgDir(dir, route)}. Type this post's route to continue `)
  }
}

const fileNeedsResponsiveImage = (files, file) => {
  return (file.endsWith('.jpg')  || file.endsWith('.png')) &&
         !file.endsWith('-1280.jpg') && !file.endsWith('-1280.png') &&
         !file.endsWith('-720.jpg') && !file.endsWith('-720.png') &&
         !file.endsWith('-480.jpg') && !file.endsWith('-480.png')
}

const generateResponsiveImages = (dir, route) => {
  fs.readdir(s3ImgDir(dir, route), (err, files) => {
    files.forEach((file) => {
      if (fileNeedsResponsiveImage(files, file)) {
        const origFile = `${s3ImgDir(dir, route)}/${file}`
        const fileWith1280 = resImgPath(dir, route, file, 1280)

        sharp(origFile)
          .resize(1280)
          .toFile(fileWith1280)
          .then(data => {
            // https://nodejs.org/api/fs.html#fs_fs_promises_api see when that is not experimental
            fs.unlink(origFile, (err) => {
              if (err) {
                return Promise.reject(err)
              } else {
                fs.rename(fileWith1280, origFile, (err) => {
                  if (err) {
                    return Promise.reject(err)
                  } else {
                    sharp(origFile)
                      .resize(720)
                      .toFile(resImgPath(dir, route, file, 720))
                      .then(data => {
                        sharp(origFile)
                          .resize(480)
                          .toFile(resImgPath(dir, route, file, 480))
                          .then(data => {
                            return Promise.resolve()
                          })
                    })
                  }
                })
              }
            })
          })
          .catch(err => {
            console.log(file, err)
            return Promise.reject(err)
          })
      }
    })
  })
  return Promise.resolve()
}
