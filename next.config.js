const withImages = require('next-images')
module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  ...withImages()
}