import "mocha";
import {expect} from 'chai';
import {isLeapYear} from '../src/ejercicio1';

describe("isLeapYear fuction test", () => {
  it("isLeapYear(2000) and isLeapYear(1996) return value true", () => {
    expect(isLeapYear(2000)).to.be.true;
    expect(isLeapYear(1996)).to.be.true;
  });
  it("isLeapYear(1997) and isLeapYear(1990) return value False", () => {
    expect(isLeapYear(1997)).to.be.false;
    expect(isLeapYear(1990)).to.be.false;
  });
});
