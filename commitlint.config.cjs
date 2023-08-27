// module.exports = { extends: ['@commitlint/config-conventional'] };

module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'perf',
        'chore',
        'prune',
        'hotfix',
        'docs',
        'deploy',
        'ui',
        'init',
        'test',
        'security',
        'osx',
        'linux',
        'windows',
        'android',
        'ios',
        'release',
        'lint',
        'wip',
        'fix-ci',
        'downgrade',
        'upgrade',
        'pushpin',
        'ci',
        'analytics',
        'refactoring',
        'docker',
        'dep-add',
        'dep-rm',
        'config',
        'i18n',
        'typo',
        'poo',
        'revert',
        'merge',
        'dep-up',
        'compat',
        'mv',
        'license',
        'breaking',
        'assets',
        'review',
        'access',
        'docs-code',
        'beer',
        'texts',
        'db',
        'log-add',
        'log-rm',
        'contrib-add',
        'ux',
        'arch',
        'iphone',
        'clown-face',
        'egg',
        'see-no-evil',
        'camera-flash',
        'experiment',
        'seo',
        'k8s',
        'types',
        'seed',
        'flags',
        'animation',
        'wastebasket',
        'passport-control',
        'adhesive-bandage',
        'monocle-face',
        'coffin',
        'test-tube',
        'necktie',
        'stethoscope',
        'bricks',
        'technologist',
      ],
    ],
  },
};
