var helpers = require('yeoman-generator').test;
var fs = require('fs');
var should = require('should');
var _ = require('underscore.string');

module.exports = {
    shouldFileContainCode: function(filePath, code, trueFalse) {
        trueFalse = trueFalse === undefined ? true : trueFalse;

        // read file
        var file = fs.readFileSync(filePath, 'utf8');

        // turn code in string-form to regex
        var regex = new RegExp(code);

        regex.test(file).should.eql(trueFalse, file + ' contains ' + code + ' should be ' + trueFalse);
    }
}