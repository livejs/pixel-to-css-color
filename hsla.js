var genfun = require('generate-function')

var toCssColor = genfun()
  ('function (hue, saturation, lightness, alpha) {')
    ('return ["hsla(", hue, ", ", saturation, "%, ", lightness, "%, ", alpha, ")"].join("")')
  ('}').toFunction()

module.exports = toCssColor
