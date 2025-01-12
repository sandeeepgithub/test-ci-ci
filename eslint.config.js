const indent = 2;
module.exports = [
  {
    rules: {
      // General Syntax and Formatting Rules
      semi: ['error', 'always'], // Enforce semicolons
      indent: ['error', indent], // Enforce consistent indentation (2 spaces)
      quotes: ['error', 'single'], // Enforce single quotes for strings
      curly: ['error', 'all'], // Require curly braces for all control statements
      eqeqeq: ['error', 'smart'], // Require strict equality (===, !==)
      'consistent-return': 'error', // Enforce consistent return values in functions

      // Code Quality and Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console logs, allow console.warn and console.error
      'no-debugger': 'warn', // Warn on debugger statements
      'no-alert': 'error', // Disallow alert, confirm, and prompt
      'no-duplicate-imports': 'error', // Disallow duplicate imports
      'no-magic-numbers': [
        'error',
        { ignoreArrayIndexes: true, ignore: [0, 1] }, // Disallow magic numbers, but allow 0 and 1
      ],
      'prefer-arrow-callback': 'error', // Prefer arrow functions as callbacks
      'no-eval': 'error', // Disallow eval() usage
      'no-new-func': 'error', // Disallow creation of functions with the Function constructor

      // Comment and Warning Rules
      'no-warning-comments': [
        'error',
        { terms: ['eslint-disable'], location: 'anywhere' },
      ],

      // Code Quality and Error Prevention
      'no-unused-vars': 'error', // Ensure variables are used
    },
  },
];
