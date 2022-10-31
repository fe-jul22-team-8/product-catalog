module.export ={
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    semi: "off",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "prefer-const": 2,
    curly: [
      2,
      "all"
    ],
    "max-len": [
      "error",
      {
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
   " no-redeclare": [
      2,
      {
        builtinGlobals: true
      }
    ],
    "no-console" : 2,
   " operator-linebreak": [
      2,
      "before"
    ],
    "brace-style": [
      2,
      "1tbs"
    ],
   " arrow-body-style": 0,
   " arrow-parens": 0,
    "no-param-reassign": [
      2,
      {
        props: true
      }
    ],
   "padding-line-between-statements": [
      2,
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: [
          "const",
          "let",
          "var"
        ],
        next: "*"
      },
      {
        blankLine: "any",
        prev: [
          "const",
          "let",
          "var"
        ],
        next: [
          "const",
          "let",
          "var"
        ]
      },
      {
        blankLine: "always",
        prev: "directive",
        next: "*"
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*"
      }
    ],
    "react/prop-types": 0,
   " react/require-default-props": 0,
   " import/prefer-default-export": 0,
    "standard/no-callback-literal": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".tsx"
        ]
      }
    ],
   " react/destructuring-assignment": 0,
   " react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": [
      2,
      "never"
    ],
    "react-hooks/rules-of-hooks": 2,
   " react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
   " @typescript-eslint/explicit-function-return-type": "off",
   " @typescript-eslint/no-unused-vars": [
      "error"
    ],
   " @typescript-eslint/indent": [
      "error",
      2
    ],
   " @typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
         " {}": false
        }
      }
    ],
   " @typescript-eslint/explicit-module-boundary-types": "off"
  },
  overrides: [
    {
      files: [
        "**/*.spec.jsx"
      ],
      rules: {
        "react/jsx-filename-extension": [
          "off"
        ]
      }
    }
  ]
}
