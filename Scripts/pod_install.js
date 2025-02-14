#!/usr/bin/env node

const exec = require('child_process').execSync;
const path = require('path');

module.exports = function(context) {
    const iosPlatform = path.join(context.opts.projectRoot, 'platforms', 'ios');
    console.log('Running pod install...');
    exec('pod install', { cwd: iosPlatform, stdio: 'inherit' });
};
