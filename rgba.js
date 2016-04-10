var genfun = require('generate-function')

var toCssColor = genfun()
  ('function (red, green, blue, alpha) {')
    ('return ["rgba(", ~~red, ", ", ~~green, ", ", ~~blue, ", ", (alpha != null ? alpha : 1), ")"].join("")')
  ('}').toFunction()

module.exports = toCssColor
