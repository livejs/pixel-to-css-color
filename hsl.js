var genfun = require('generate-function')

var toCssColor = genfun()
  ('function (hue, saturation, lightness) {')
    ('return ["hsl(", hue, ", ", saturation, "%, ", lightness, "%)"].join("")')
  ('}').toFunction()

module.exports = toCssColor
