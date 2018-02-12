var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to subtract', function () {
  calculator.previousTotal = 7;
  calculator.subtract(4);
  assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply', function () {
  calculator.previousTotal = 5;
  calculator.multiply(3);
  assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide', function () {
  calculator.previousTotal = 21;
  calculator.divide(7);
  assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should display number when it\'s clicked', function() {
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should display operator when it\'s clicked', function() {
    calculator.operatorClick('*');
    assert.strictEqual(calculator.previousOperator, '*');
  })

  it('should clear when clr is clicked', function() {
    calculator.numberClick(6);
    calculator.numberClick(8);
    calculator.clearClick();
    result = calculator.runningTotal
    assert.strictEqual(result, 0);
  })

});
