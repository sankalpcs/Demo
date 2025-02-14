#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

module.exports = function(context) {
    const iosPlatformPath = path.join(context.opts.projectRoot, 'platforms', 'ios');
    const rootPodfilePath = path.join(context.opts.projectRoot, 'Podfile');
    const iosPodfilePath = path.join(iosPlatformPath, 'Podfile');

    if (fs.existsSync(iosPlatformPath)) {
        if (fs.existsSync(rootPodfilePath)) {
            console.log('Copying Podfile from root to platforms/ios...');
            fs.copyFileSync(rootPodfilePath, iosPodfilePath);
        } else {
            console.log('No Podfile found in the root folder.');
        }

        console.log('Running pod install...');
        exec('pod install', { cwd: iosPlatformPath, stdio: 'inherit' });
    } else {
        console.log('iOS platform not found. Skipping pod install.');
    }
};
