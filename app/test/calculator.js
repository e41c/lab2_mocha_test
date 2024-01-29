const assert = require('chai').assert;
const { add, sub, mul, div } = require('../calculator'); // Make sure to adjust the path based on your project structure

describe('Calculator Tests', function () {
  it('should add two numbers', function () {
    assert.equal(add(5, 2), 7); // PASS
    assert.equal(add(5, 2), 8); // FAIL
  });

  it('should subtract two numbers', function () {
    assert.equal(sub(5, 2), 3); // PASS
    assert.equal(sub(5, 2), 5); // FAIL
  });

  it('should multiply two numbers', function () {
    assert.equal(mul(5, 2), 10); // PASS
    assert.equal(mul(5, 2), 12); // FAIL
  });

  it('should divide two numbers', function () {
    assert.equal(div(10, 2), 5); // PASS
    assert.equal(div(10, 2), 2); // FAIL
  });
});
