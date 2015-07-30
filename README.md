# pixel-to-css-color

convert a [pixel ndarray](https://github.com/livejs/ndpixels) to a css color string

code stolen from [color-style](https://github.com/mattdesl/color-style/blob/master/index.js) and tests stolen from [array-to-css-color](https://github.com/tmpvar/array-to-css-color/blob/master/test.js)

## install

with [npm](https://npmjs.org) installed, run

```bash
npm i --save pixel-to-css-color
```

## usage

```
var ndarray = require('ndarray')
var toCss = require('pixel-to-css-color')

var pixel = ndarray([1, 2, 3])
console.log(toCss.rgb(pixel)) // rgb(1, 2, 3)
```

## license

ISC
