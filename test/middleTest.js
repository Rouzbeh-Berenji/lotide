const assert = require('chai').assert;
const middle  = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
  it("returns e,t,y  for [2,5, 0,6,8]", () => {
    assert.deepEqual(middle([2,5,0,6,8]), 0);
  });
});