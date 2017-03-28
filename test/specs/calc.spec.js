(function() {
  'use strict';


  let expect = window.chai.expect;
  describe('test run', function () {
    it('should be true', function (){
      expect(true).to.be.true;
    });
    describe('math module', function(){
      describe('test the sum function', function(){
        it('should given two numbers add them together', function() {
          let result = window.calc.sum([2, 3]);
          expect(result).to.be.a('number');
          expect(result).to.equal(5);
        });
        it('should handle one argument', function(){
          let result = window.calc.sum(22);
          expect(result).to.be.undefined;
        });
        it('should handle no arguments', function (){
          let result = window.calc.sum();
          expect(result).to.be.NaN;
        });
        it('should convert strings to numbers for addition', function() {
          let result = window.calc.sum(['3','7']);
          expect(result).to.be.a('number').and.to.equal(10);
        });
      });
    });
  });



}());
