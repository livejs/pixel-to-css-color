var genfun = require('generate-function')

var css = genfun()
  ('function (color) {')
    ('return color.get(0)')
  ('}')

module.exports = css.toFunction()
