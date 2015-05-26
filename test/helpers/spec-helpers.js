var helpers = require('yeoman-generator').test;
var fs = require('fs');
var should = require('should');
var _ = require('underscore.string');

module.exports = {
    shouldFileContainCode: function(filePath, code, trueFalse) {
        trueFalse = trueFalse === undefined ? true : trueFalse;

        // read file
        var file = fs.readFileSync(filePath, 'utf8'),
            indexOfCode = file.indexOf(code);

        if (trueFalse) {
            return indexOfCode.should.not.eql(-1, '\n\n' + file + ' should contain ' + code);
        }

        return indexOfCode.should.eql(-1, '\n\n' + file + ' should NOT contain ' + code);
    }
}