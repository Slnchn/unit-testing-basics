import { expect } from 'chai';

import { isNaturalNumber, getFactorial } from '../src/helpers/math.helpers';

describe('Math helpers', () => {
  describe('isNaturalNumber', () => {
    it('should return true if positive integer number passed', () => {
      expect(isNaturalNumber(2)).to.be.true;
    });

    it('should return false if positive not-integer number passed', () => {
      expect(isNaturalNumber(2.2)).to.be.false;
    });

    it('should return false if 0 passed', () => {
      expect(isNaturalNumber(0)).to.be.false;
    });

    it('should return false if negative integer number passed', () => {
      expect(isNaturalNumber(-2)).to.be.false;
    });

    it('should return false if negative non-integer number passed', () => {
      expect(isNaturalNumber(-2.2)).to.be.false;
    });

    it('should return false if nothing passed', () => {
      expect(isNaturalNumber(-2)).to.be.false;
    });

    it('should return false if NaN passed', () => {
      expect(isNaturalNumber(NaN)).to.be.false;
    });

    it('should return false if infinite value passed', () => {
      expect(isNaturalNumber(Infinity)).to.be.false;
      expect(isNaturalNumber(-Infinity)).to.be.false;
    });

    it('should return false if string passed', () => {
      expect(isNaturalNumber('hello')).to.be.false;
    });

    it('should return false if string adable to number passed', () => {
      expect(isNaturalNumber('12')).to.be.false;
    });

    it('should return false if bool passed', () => {
      expect(isNaturalNumber(true)).to.be.false;
      expect(isNaturalNumber(false)).to.be.false;
    });

    it('should return false if null passed', () => {
      expect(isNaturalNumber(null)).to.be.false;
    });
  });

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
      expect(getFactorial.bind(2.2)).to.throw(Error);
      expect(getFactorial.bind(-2)).to.throw(Error);
      expect(getFactorial.bind(-2.2)).to.throw(Error);
      expect(getFactorial.bind(NaN)).to.throw(Error);
      expect(getFactorial.bind(Infinity)).to.throw(Error);
      expect(getFactorial.bind(-Infinity)).to.throw(Error);
      expect(getFactorial.bind('hello')).to.throw(Error);
      expect(getFactorial.bind('12')).to.throw(Error);
      expect(getFactorial.bind(true)).to.throw(Error);
      expect(getFactorial.bind(false)).to.throw(Error);
      expect(getFactorial.bind(null)).to.throw(Error);
    });
  });
});
