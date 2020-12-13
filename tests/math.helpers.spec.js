import { expect } from 'chai';

import { getFactorial } from '../src/helpers/math.helpers';

describe('Math helpers', () => {
  describe('getFactorial', () => {
    it('should calculate factorial correctly', () => {
      expect(getFactorial(1)).to.be.equal(1);
      expect(getFactorial(2)).to.be.equal(2);
      expect(getFactorial(3)).to.be.equal(6);
      expect(getFactorial(4)).to.be.equal(24);
      expect(getFactorial(5)).to.be.equal(120);
    });

    it('should return 1 if 0 passed', () => {
      expect(getFactorial(0)).to.be.equal(1);
    });

    it('should throw an error if non-natural value or 0 passed', () => {
      expect(getFactorial.bind(null)).to.throw(Error);
      expect(getFactorial.bind(null, 2.2)).to.throw(Error);
      expect(getFactorial.bind(null, -2)).to.throw(Error);
      expect(getFactorial.bind(null, -2.2)).to.throw(Error);
      expect(getFactorial.bind(null, NaN)).to.throw(Error);
      expect(getFactorial.bind(null, Infinity)).to.throw(Error);
      expect(getFactorial.bind(null, -Infinity)).to.throw(Error);
      expect(getFactorial.bind(null, 'hello')).to.throw(Error);
      expect(getFactorial.bind(null, '12')).to.throw(Error);
      expect(getFactorial.bind(null, true)).to.throw(Error);
      expect(getFactorial.bind(null, false)).to.throw(Error);
      expect(getFactorial.bind(null, null)).to.throw(Error);
    });
  });
});
