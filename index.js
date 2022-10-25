const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual  = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countletters   = require('./countletters');
const countOnly  = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects  = require('./eqObjects');
const findKeyByValue   = require('./findKeyByValue');
const letterPosition = require('./letterPosition');
const map  = require('./map');
const without  = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual : assertObjectsEqual,
  countletters : countletters,
  countOnly : countOnly,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKeyByValue : findKeyByValue,
  letterPosition : letterPosition,
  map : map,
  without : without,
};