/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    // stylelint-config-standard-scss:
    // - Extends: https://github.com/stylelint/stylelint-config-standard/blob/main/index.js
    // - Extends: https://github.com/stylelint/stylelint-config-recommended/blob/main/index.js
    // - Extends: https://github.com/stylelint-scss/stylelint-config-recommended-scss/blob/master/index.js
    // - Adds: https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/main/index.js
    'stylelint-config-standard-scss',
    // Below config extension applies rules: https://github.com/bjankord/stylelint-config-sass-guidelines/blob/main/index.js
    'stylelint-config-sass-guidelines',
  ],
  plugins: [
    'stylelint-order',
  ],
  // All available rules from stylelint itself: https://stylelint.io/user-guide/rules/list
  // All available rules from stylelint-scss plugin: https://github.com/stylelint-scss/stylelint-scss#list-of-rules
  // All available rules from stylelint-order plugin: https://github.com/hudochenkov/stylelint-order#rules
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'comment-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'declaration-property-max-values': {
      'max-allowed': 2,
      '/^background/': 1,
      '/^border/': 1,
      '/^flex/': 1,
      '/^margin/': 1,
      '/^padding/': 1,
    },
    'font-family-name-quotes': 'always-unless-keyword',
    'max-nesting-depth': 3,
    'no-duplicate-selectors': null,
    'no-unknown-animations': true,
    'order/properties-alphabetical-order': null,
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)*(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    'selector-max-specificity': ['0,4,1'],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: ['at-rule'],
      },
    ],
    'scss/operator-no-newline-after': null, // Conflicts with prettier
  },
};
