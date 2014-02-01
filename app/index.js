'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AngularGenerator = module.exports = function AngularGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularGenerator, yeoman.generators.Base);

AngularGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'input',
        name: 'appName',
        message: 'What do you want to call your app?',
        default: 'das-app'
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;
        cb();
    }.bind(this));
};

AngularGenerator.prototype.app = function app() {

    this.copy('bowerrc', '.bowerrc');
    this.copy('bower.json', 'bower.json');
    this.copy('package.json', 'package.json');
    this.copy('Gruntfile.js', 'Gruntfile.js');

    this.directory('public', 'public');
    this.directory('test', 'test');
};

AngularGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('gitignore', '.gitignore');
};
