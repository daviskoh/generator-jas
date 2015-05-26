/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var _ = require('underscore.string');
var specHelpers = require('./helpers/spec-helpers.js');

describe('jas generator', function () {
    var jas,
        functionName = 'meowFriend',
        underscoredFunctionName = _.underscored(functionName);

    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, underscoredFunctionName), function (err) {
            if (err) {
                return done(err);
            }

            jas = helpers.createGenerator('jas:app', ['../../app']);

            jas.options['skip-install'] = true;

            done();

        }.bind(this));
    });

    it('generates proper instance of the function name', function (done) {
        jas.run({}, function () {
            specHelpers.shouldFileContainCode(underscoredFunctionName + '.js', functionName, true);

            specHelpers.shouldFileContainCode(underscoredFunctionName + '.spec.js', functionName, true);

            done();
        });
    });

    it('require in exported function into spec file', function (done) {
        var code = "var " + _.camelize(functionName) + " = require('./" + underscoredFunctionName + ".js');"

        jas.run({}, function () {
            specHelpers.shouldFileContainCode(underscoredFunctionName + '.spec.js', code, true);
            done();
        });
    });
});