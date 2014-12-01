/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var _ = require('underscore.string');
var rimraf = require('rimraf');

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

    after(function (done) {
        rimraf(path.join(__dirname, underscoredFunctionName), function (error) {
          done();
        });
    });

    it('creates expected files', function (done) {
        jas.run({}, function () {
            helpers.assertFile([
                // add files you expect to exist here.
                'lib/' + _.underscored(functionName) + '.js',
                'spec/' + _.underscored(functionName) + '.spec.js',
                '.gitignore'
            ]);

            done();
        });
    });
});