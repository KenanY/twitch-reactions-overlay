module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  plugins: [
    'flowtype',
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      pragma: 'h'
    }
  },
  rules: {
    'prettier/prettier': [1, {
      arrowParens: 'always',
      singleQuote: true,
      trailingComma: 'none'
    }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1
  }
};
