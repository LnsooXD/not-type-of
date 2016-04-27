"use strict";
/*!
 * not-type-of - test/test.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
'use strict';

/**
 * Module dependencies.
 */

var not = require('..');
var should = require('should');
var Long = require('long');
var semver = require('semver');

describe('not', function () {
  describe('finite', function () {
    it('should true', function () {
      not.finite(37).should.equal(false);
    });

    it('should false', function () {
      not.finite(NaN).should.equal(true);
      not.finite(Number.NaN).should.equal(true);
      not.finite(0 / 0).should.equal(true);
      not.finite(undefined).should.equal(true);
      not.finite({}).should.equal(true);

      not.finite(false).should.equal(true);
      not.finite(null).should.equal(true);

      not.finite("37").should.equal(true);
      not.finite("37.37").should.equal(true);
      not.finite("").should.equal(true);
      not.finite(" ").should.equal(true);
      not.finite("NaN").should.equal(true);
      not.finite("blabla").should.equal(true);
    });
  });
  describe('NaN', function () {
    it('should true', function () {
      not.NaN(NaN).should.equal(false);
      not.NaN(Number.NaN).should.equal(false);
      not.NaN(0 / 0).should.equal(false);
    });

    it('should false', function () {
      not.NaN(undefined).should.equal(true);
      not.NaN({}).should.equal(true);

      not.NaN(false).should.equal(true);
      not.NaN(null).should.equal(true);
      not.NaN(37).should.equal(true);

      not.NaN("37").should.equal(true);
      not.NaN("37.37").should.equal(true);
      not.NaN("").should.equal(true);
      not.NaN(" ").should.equal(true);
      not.NaN("NaN").should.equal(true);
      not.NaN("blabla").should.equal(true);
    });
  });
  describe('generator', function () {
    it('should true', function () {
      var gen = function *() {
        yield 1;
        return 2;
      };
      not.generator(gen()).should.equal(false);
    });

    it('should false', function () {
      var gen = function *() {
      };
      var fun = function () {
      };
      var obj = {};
      not.generator(gen).should.equal(true);
      not.generator(fun).should.equal(true);
      not.generator(obj).should.equal(true);
    });
  });

  describe('generatorFunction', function () {
    it('should true', function () {
      var gen = function *() {
        yield 1;
        return 2;
      };
      not.generatorFunction(gen).should.equal(false);
    });

    it('should false', function () {
      var gen = function *() {
      };
      var fun = function () {
      };
      var obj = {};
      not.generatorFunction(gen()).should.equal(true);
      not.generatorFunction(fun).should.equal(true);
      not.generatorFunction(obj).should.equal(true);
    });
  });

  describe('promise', function () {
    it('should true', function () {
      var pro = {
        then: function () {
        }
      };
      not.promise(pro).should.equal(false);
    });

    it('should false', function () {
      var hasthen = {then: 1};
      var obj = {};
      var number = 1;
      not.promise(hasthen).should.equal(true);
      not.promise(obj).should.equal(true);
      not.promise(number).should.equal(true);
    });
  });

  describe('class', function () {
    if (semver.gt(process.version.substring(1), '4.0.0')) {
      it('should true', function () {
        class Foo {
        }
        ;
        not.class(Foo).should.equal(false);
      });

      it('should false', function () {
        function Bar() {
        };
        not.class(Bar).should.equal(true);
        not.class({}).should.equal(true);
      });
    }
  });

  describe('int', function () {
    it('should true', function () {
      not.int(0).should.equal(false);
      not.int(-100).should.equal(false);
      not.int(100).should.equal(false);
      not.int(Math.pow(2, 31)).should.equal(false);
      not.int(Math.pow(2, 50)).should.equal(false);
      not.int(-Math.pow(2, 31)).should.equal(false);
      not.int(-Math.pow(2, 50)).should.equal(false);
    });

    it('should false', function () {
      not.int(0.1).should.equal(true);
      not.int(-0.1).should.equal(true);
      not.int(-111110.1).should.equal(true);
      not.int(11110.12312321).should.equal(true);
      not.int('1.1').should.equal(true);
    });
  });

  describe('int32', function () {
    it('should true', function () {
      not.int32(0).should.equal(false);
      not.int32(-100).should.equal(false);
      not.int32(100).should.equal(false);
      not.int32(Math.pow(2, 31) - 1).should.equal(false);
      not.int32(-Math.pow(2, 31)).should.equal(false);
    });

    it('should false', function () {
      not.int32(Math.pow(2, 31)).should.equal(true);
      not.int32(Math.pow(2, 50)).should.equal(true);
      not.int32(-Math.pow(2, 31) - 1).should.equal(true);
      not.int32(-Math.pow(2, 50)).should.equal(true);
      not.int32(-Math.pow(2, 63)).should.equal(true);
      not.int32(0.1).should.equal(true);
      not.int32(-0.1).should.equal(true);
      not.int32(-111110.1).should.equal(true);
      not.int32(11110.12312321).should.equal(true);
      not.int32('1.1').should.equal(true);
    });
  });

  describe('long', function () {
    it('should true', function () {
      not.long(Math.pow(2, 31)).should.equal(false);
      not.long(Math.pow(2, 50)).should.equal(false);
      not.long(-Math.pow(2, 31) - 1).should.equal(false);
      not.long(-Math.pow(2, 50)).should.equal(false);
      not.long(-Math.pow(2, 63)).should.equal(false);
    });

    it('should false', function () {
      not.long(0.1).should.equal(true);
      not.long(-0.1).should.equal(true);
      not.long(-111110.1).should.equal(true);
      not.long(11110.12312321).should.equal(true);
      not.long('1.1').should.equal(true);
      not.long(0).should.equal(true);
      not.long(-100).should.equal(true);
      not.long(100).should.equal(true);
      not.long(Math.pow(2, 31) - 1).should.equal(true);
      not.long(-Math.pow(2, 31)).should.equal(true);
    });
  });

  describe('Long', function () {
    it('should true', function () {
      not.Long(Long.fromNumber(Math.pow(2, 31))).should.equal(false);
      not.Long(Long.fromString('1024102410241024')).should.equal(false);
    });

    it('should false', function () {
      not.Long(123).should.equal(true);
    });
  })

  describe('double', function () {
    it('should true', function () {
      not.double(0.1).should.equal(false);
      not.double(-0.1).should.equal(false);
      not.double(-111110.1).should.equal(false);
      not.double(11110.12312321).should.equal(false);
    });

    it('should false', function () {
      not.double(0).should.equal(true);
      not.double(-100).should.equal(true);
      not.double(100).should.equal(true);
      not.double(Math.pow(2, 31)).should.equal(true);
      not.double(Math.pow(2, 50)).should.equal(true);
      not.double(-Math.pow(2, 31)).should.equal(true);
      not.double(-Math.pow(2, 50)).should.equal(true);
    });
  });
});