"use strict;"
var Utils = require('../lib/Utils.js');
var assert = require('assert');

describe('Utils Test', function () {
    describe('randomString Test', function () {
        var result1 = Utils.randomString(10, "")
        it(result1, function () {
            assert.equal(result1.length , 10);
        });
    });
    
    describe('isEmpty Test', function () {
        it('undefined', function () {
            assert.equal(Utils.isEmpty(undefined), true);
        });
        it('null', function () {
            assert.equal(Utils.isEmpty(null), true);
        });
        it('string.empty', function () {
            assert.equal(Utils.isEmpty(""), true);
        });
        it('string.empty', function () {
            assert.equal(Utils.isEmpty(''), true);
        });
        it('number', function () {
            assert.equal(Utils.isEmpty(0), false);
        });
    });

    describe('localizeString Test', function () {
        it('abc', function () {
            assert.equal(Utils.localizeString('abc'), 'abc');
        });
    });

    describe('now Test', function () {
        it(Utils.now(), function () {
        });
    });

    describe('stripPrivacyParams Test', function () {
        it('delete token', function () {
            var user = {
                token : "1234567890"
            }
            result = Utils.stripPrivacyParams(user);
            assert.equal(result.token, undefined);
        });
    });

    describe('stripPrivacyParamsFromArray Test', function () {
        it('delete token', function () {
            var user1 = {
                token: "abcdefg"
            };
            var user2 = {
                token: "hijklmn"
            };
            var users = [user1, user2];
            var result = Utils.stripPrivacyParamsFromArray(users);
            assert.equal(result[0].token, undefined);
            assert.equal(result[1].token, undefined);
        });
    });
});

