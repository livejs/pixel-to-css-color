var genfun = require('generate-function')

var toCssColor = genfun()
  ('function rgbaToCssColor (red, green, blue, alpha) {')
    ('return "rgba(" + ~~red + ", " + ~~green + ", " + ~~blue + ", " + (alpha != null ? alpha : 1) + ")"')
  ('}').toFunction()

module.exports = toCssColor
