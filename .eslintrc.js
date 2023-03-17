module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'react/style-prop-object': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-bind': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'brace-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
