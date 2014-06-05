/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var _ = require('underscore.string');
var specHelpers = require('./helpers/spec-helpers.js');

describe('jas generator', function () {
    var jas,
        functionName = 'meowFriend';

    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            jas = helpers.createGenerator('jas:app', [
                '../../app'
            ], [functionName]);

            jas.options['skip-install'] = true;

            done();

        }.bind(this));
    });

    it('creates expected files', function (done) {
        jas.run({}, function () {
            specHelpers.shouldFileContainCode('lib/' + _.underscored(functionName) + '.js', functionName, true);

            specHelpers.shouldFileContainCode('spec/' + _.underscored(functionName) + '_spec.js', functionName, true);

            done();
        });
    });
});