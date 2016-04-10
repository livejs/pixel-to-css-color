var genfun = require('generate-function')

var toCssColor = genfun()
  ('function keywordToCssColor (keyword) {')
    ('return keyword')
  ('}').toFunction()

module.exports = toCssColor
