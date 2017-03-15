(function() {
    'use strict';


    let expect = window.chai.expect;
    describe('test run', function (){
      it('should be true', function (){
        expect(true).to.be.true;
      });
      describe('test the sum function', function(){
        it('should given two numbers add them together', function() {
          let result = window.calc.sum([2, 3]);
          expect(result).to.be.a('number');
          expect(result).to.equal(5);
        });
        it('should handle one argument', function(){
          let result = window.calc.sum(22);
          expect(result).to.be.a('number');
          expect(result).to.equal(22);
        });
      });
    });





})();
