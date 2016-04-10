var genfun = require('generate-function')

var toCssColor = genfun()
  ('function (red, green, blue) {')
    ('return ["rgb(", ~~red, ", ", ~~green, ", ", ~~blue, ")"].join("")')
  ('}').toFunction()

module.exports = toCssColor
