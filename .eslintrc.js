module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "off",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    "react/function-component-definition": [
      1,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "func-names": 0,
    "import/no-unresolved": ["off", { caseSensitive: false }],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": ["off"],
    "max-len": ["off", { code: 100, ignoreTemplateLiterals: true }],
    "no-extraneous-dependencies": [0],
    "no-return-assign": ["off"],
    "no-restricted-syntax": ["error", "SequenceExpression"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-param-reassign": [2, { props: false }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/prop-types": ["warn"],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    quotes: [
      "warn",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
