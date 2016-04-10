var genfun = require('generate-function')

var toCssColor = genfun()
  ('function hslaToCssColor (hue, saturation, lightness, alpha) {')
    ('return "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + alpha + ")"')
  ('}').toFunction()

module.exports = toCssColor
