var genfun = require('generate-function')

var toCssColor = genfun()
  ('function hslToCssColor (hue, saturation, lightness) {')
    ('return "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)"')
  ('}').toFunction()

module.exports = toCssColor
