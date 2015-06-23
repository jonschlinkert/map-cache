/*!
 * map-cache <https://github.com/jonschlinkert/map-cache>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var MapCache = require('./');

describe('mapCache', function () {
  var cache = new MapCache;

  it('should set values on the `__data__` object on the cache:', function () {
    cache.set('a', 'b');
    cache.should.eql({ __data__: { a: 'b' }});
    cache.del('a');
  });

  it('should delete values from the `__data__` object:', function () {
    cache.set('a', 'b');
    cache.del('a');
    cache.should.eql({ __data__: {}});
  });

  it('should get values from the `__data__` object:', function () {
    cache.set('a', 'b');
    cache.get('a').should.equal('b');
    cache.get('a').should.not.equal('a');
  });

  it('should return `true` if `__data__` has `key`:', function () {
    cache.set('a', 'b');
    cache.has('a').should.be.true;
    cache.has('a').should.not.be.false;
  });
});
