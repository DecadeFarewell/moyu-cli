module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }], // 注释后需要空格
    'no-useless-constructor': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'no-bitwise': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'arrow-parens': ['error', 'always'],
    'guard-for-in': 'off',
    'linebreak-style': 'off',
    'func-names': 'off',
    'operator-linebreak': ['error', 'after'],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
  },
};
