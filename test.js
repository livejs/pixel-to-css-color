var css = require('./');
var test = require('tape');
var nd = require('ndarray')

test('rgb', function(t) {
  t.equal(
    css.rgba(nd([0, 0, 0, 1])),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css.rgba(nd([255, 0, 0, 1])),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css.rgba(nd([0, 255, 0, 1])),
    'rgba(0, 255, 0, 1)'
  );

  t.equal(
    css.rgba(nd([0, 0, 255, 1])),
    'rgba(0, 0, 255, 1)'
  );

  t.equal(
    css.rgb(nd([0, 0, 255, 1])),
    'rgb(0, 0, 255)'
  );

  t.end();
});

test('hsl', function(t) {
  t.equal(
    css.hsl(nd([0, 100, 50, 1])),
    'hsl(0, 100%, 50%)'
  );

  t.equal(
    css.hsla(nd([0, 75, 25, 1])),
    'hsla(0, 75%, 25%, 1)'
  );

  t.end();
});


test('intelligence', function(t) {
  t.equal(
    css.rgba(nd([0, 0, 255])),
    'rgba(0, 0, 255, 1)'
  );

  t.end();
});

test('degenerates', function(t) {
  t.equal(
    css.rgba(null),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css.rgba(nd([])),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css.rgba(nd([255])),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css.rgba(nd([255, 255])),
    'rgba(255, 255, 0, 1)'
  );

  t.end();
});
