'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('underscore.string');

var JasGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            // if (!this.options['skip-install']) {
            //     this.installDependencies();
            // }
        });
    },

    app: function () {
        this.name = path.basename(process.cwd());
        this.camelizedName = _.camelize(this.name);
        this.underscoredName = _.underscored(this.name);

        console.log('Setting up files for ' + chalk.green(this.name) + ' function');

        // create files
        this.template('function.js', this.underscoredName + '.js');
        this.template('function.spec.js', this.underscoredName + '.spec.js');

        this.template('gitignore', '.gitignore');
    }
});

module.exports = JasGenerator;