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
pixel.format = 'rgb'
console.log(toCss(pixel)) // rgb(1, 2, 3)

// for raw performance
console.log(toCss.rgb(1, 2, 3)) // rgb(1, 2, 3)
```

## License

The Apache License

Copyright &copy; 2016 Michael Williams (@ahdinosaur)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
