#!/usr/bin/env node
const exec = require('child_process').execSync;

module.exports = function(context) {
    console.log('Preparing iOS platform...');
    exec('cordova platform add ios@latest --save', { stdio: 'inherit' });
    exec('pod install', { cwd: 'platforms/ios', stdio: 'inherit' });
};
