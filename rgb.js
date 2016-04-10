var genfun = require('generate-function')

var toCssColor = genfun()
  ('function rgbToCssColor (red, green, blue) {')
    ('return "rgb(" + ~~red + ", " + ~~green + ", " + ~~blue + ")"')
  ('}').toFunction()

module.exports = toCssColor
