var genfun = require('generate-function')

var keyword = require('./keyword')
var rgb = require('./rgb')
var rgba = require('./rgba')
var hsl = require('./hsl')
var hsla = require('./hsla')

var pixelToCssColor = genfun()
  ('function pixelToCssColor (pixel) {')
    ('switch (pixel.format) {')
      ('case "keyword":')
        ('return keyword(pixel.get(0))')
      ('case "rgb":')
        ('return rgb(pixel.get(0), pixel.get(1), pixel.get(2))')
      ('case "hsl":')
        ('return hsl(pixel.get(0), pixel.get(1), pixel.get(2))')
      ('case "rgba":')
        ('return rgba(pixel.get(0), pixel.get(1), pixel.get(2), pixel.get(3))')
      ('case "hsla":')
        ('return hsla(pixel.get(0), pixel.get(1), pixel.get(2), pixel.get(3))')
      ('default:')
        ('throw new Error("pixel-to-css-color: pixel.format not supported! use keyword, rgb, rgba, hsl, or hsla.")')
    ('}')
  ('}')
  .toFunction({
    keyword: keyword,
    rgb: rgb,
    rgba: rgba,
    hsl: hsl,
    hsla: hsla
  })

module.exports = pixelToCssColor
module.exports.keyword = keyword
module.exports.rgb = rgb
module.exports.rgba = rgba
module.exports.hsl = hsl
module.exports.hsla = hsla
