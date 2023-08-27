// module.exports = { extends: ['@commitlint/config-conventional'] };
const fs = require('fs');
const path = require('path');
const parserOpts = require('./third-party/gitmoji-parser-opts.cjs');
const commitizenConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.czrc'), 'utf-8'));

module.exports = {
  extends:['gitmoji'],
  parserPreset: {
    parserOpts: parserOpts
  },
  rules: {
    'type-enum': [
      2,
      'always',
      Object.keys(commitizenConfig.types),
    ],
  },
};
