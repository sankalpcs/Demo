#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

module.exports = function(context) {
  const projectRoot = context.opts.projectRoot;
  const iosPlatform = path.join(projectRoot, 'platforms', 'ios');

  if (fs.existsSync(iosPlatform)) {
    console.log('Running pod install...');
    exec('pod install', { cwd: iosPlatform, stdio: 'inherit' });
  }
};
