import globals from 'globals';

export default [
	{
		ignores: ['build', 'coverage', 'node_modules', 'test.js'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			curly: 'error',
			quotes: ['error', 'double'],
		},
	},
	{
		files: ['.eslintrc.{js,cjs}'],
		languageOptions: {
			globals: globals.node,
			parserOptions: {
				sourceType: 'script',
			},
		},
	},
];
