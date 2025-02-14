#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

module.exports = function(context) {
    const iosPlatformPath = path.join(context.opts.projectRoot, 'platforms', 'ios');

    if (fs.existsSync(iosPlatformPath)) {
        console.log('Running pod install...');
        exec('pod install', { cwd: iosPlatformPath, stdio: 'inherit' });
    } else {
        console.log('iOS platform not found. Skipping pod install.');
    }
};
