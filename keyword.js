var genfun = require('generate-function')

var toCssColor = genfun()
  ('function (keyword) {')
    ('return keyword')
  ('}').toFunction()

module.exports = toCssColor
