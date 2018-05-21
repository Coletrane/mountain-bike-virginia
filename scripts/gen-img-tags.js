const fs = require('fs')

const pics = fs.readdirSync(process.argv[2])
pics.forEach(pic => {
  let picName = pic.split('/')
  picName = picName[picName.length - 1]
  if (picName.endsWith('.png') || picName.endsWith('.jpg')) {
    console.log(`<blog-image :src="img + '${picName}'"/>`)
  }
})