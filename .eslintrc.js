module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    // 'prettier',
  ],

  /**
  ref: https://pjchender.dev/webdev/note-eslint/
  這裡的 semi 和 quotes 是 ESLint 中可以套用的規則（rules），陣列中的：

  1. 第一個值為錯誤層級（error level
    0/off - 關閉規則
    1/warn - 將該規則顯示為警告，但仍可執行
    2/error - 將規則顯示為錯誤，會跳出錯誤後不執行，無法成功編譯

  2. 第二個值則是針對該規則的「設定」。
    例如在 semi 規則中的 always 表示總是要有分號；
    quotes 規則中的 double 則表示要使用雙引號。
 */
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-console': 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // 'array-element-newline': ['error', 'consistent'],
    // 'array-element-newline': ['error', { 'multiline': true }],
    'array-element-newline': ['error', {
      'ArrayExpression': 'consistent',
      'ArrayPattern': { 'minItems': 3 },
    }],

    'arrow-parens': 'off',
    'block-spacing': ['error', 'always'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',

    // 声明变量必须赋值
    'init-declarations': ['error', 'always'],

    'max-len': ['error', 120],
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-case-declarations': 'off',
    'no-continue': 'off',
    'no-empty': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-tabs': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',

    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false,
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef': 0,

    'no-unused-vars': 0,
    // 'no-unused-vars': [2, {
    //   'vars': 'all',
    //   'args': 'none',
    // }],

    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false,
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,

    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,

    'object-curly-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'radix': 'off',
    // 'object-curly-spacing': ['error', 'always'],
    // eqeqeq: 'off',

    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true,
    }],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true,
    }],

    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 1,
    'no-empty-function': 1, // 禁止出现空函数

    // 無多空行
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    // 無尾隨空格
    'no-trailing-spaces': 2,
    // 逗号/空格
    'comma-spacing': [2, {
      'before': false,
      'after': true,
    }],
    // 要求或禁止使用拖尾逗号  https://cn.eslint.org/docs/rules/comma-dangle
    // 'comma-dangle': [2, 'never'],
    // 禁止拖尾逗号
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'comma-style': [2, 'last'],
    'camelcase': [0, {
      'properties': 'always',
    }],

    'vue/require-component-is': 'off',
    'vue/valid-v-for': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 3,
        allowFirstLine: true,
      },
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/singleline-html-element-content-newline': 'off',

    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    // indent: ['error', 2, {
    //   MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'],
    // }],
    'indent': [2, 2, {
      'SwitchCase': 1,
    }],

    'generator-star-spacing': [2, {
      'before': true,
      'after': true,
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true,
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true,
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false,
    }],
    // 'one-var': 'off',
    'one-var': [2, {
      'initialized': 'never',
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before',
      },
    }],
    'padded-blocks': [2, 'never'],
    // quotes: ['error', 'single'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false,
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
    }],
    // 'template-curly-spacing': 'off',
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],

    // 'prefer-const': 'off',
    'prefer-const': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false,
    }],
    'array-bracket-spacing': [2, 'never'],
  },
}
