var css = require('./');
var test = require('tape');
var  nd= require('ndarray')

function px (format, data) {
  var arr = nd(data)
  arr.format = format
  return arr
}

test('rgb', function(t) {
  t.equal(
    css(px('rgba', [0, 0, 0, 1])),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css(px('rgba', [255, 0, 0, 1])),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css(px('rgba', [0, 255, 0, 1])),
    'rgba(0, 255, 0, 1)'
  );

  t.equal(
    css(px('rgba', [0, 0, 255, 1])),
    'rgba(0, 0, 255, 1)'
  );

  t.equal(
    css(px('rgb', [0, 0, 255, 1])),
    'rgb(0, 0, 255)'
  );

  t.end();
});

test('hsl', function(t) {
  t.equal(
    css(px('hsl', [0, 100, 50, 1])),
    'hsl(0, 100%, 50%)'
  );

  t.equal(
    css(px('hsla', [0, 75, 25, 1])),
    'hsla(0, 75%, 25%, 1)'
  );

  t.end();
});


test('intelligence', function(t) {
  t.equal(
    css(px('rgba', [0, 0, 255])),
    'rgba(0, 0, 255, 1)'
  );

  t.end();
});

test('degenerates', function(t) {
  t.throws(function () {
    css(px(null, []))
  });

  t.equal(
    css(px('rgba', [])),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css(px('rgba', [255])),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css(px('rgba', [255, 255])),
    'rgba(255, 255, 0, 1)'
  );

  t.end();
});
