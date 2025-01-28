export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100], // enforce a maximum header length of 100 characters
    'body-max-line-length': [2, 'always', 200],
    'scope-empty': [2, 'never'], // enforce a non-empty scope
    'subject-empty': [2, 'never'], // enforce a non-empty subject
    'subject-full-stop': [2, 'never', '.'], // enforce no trailing period in subject
    'type-empty': [2, 'never'], // enforce a non-empty type
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'docs',
        'style',
        'test',
        'chore',
        'revert',
        'ci',
        'build',
      ],
    ],
  },
};
