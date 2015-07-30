var genfun = require('generate-function')

var css = genfun()
  ('function (color) {')
    ('return "hsla("+ color.get(0) + ", " + color.get(1) + "%, " + color.get(2) + "%, " + color.get(3) + ")"')
  ('}')

module.exports = css.toFunction()
