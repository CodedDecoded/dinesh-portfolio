import js from '@eslint/js'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        cancelAnimationFrame: 'readonly',
        document: 'readonly',
        HTMLCanvasElement: 'readonly',
        performance: 'readonly',
        requestAnimationFrame: 'readonly',
        ResizeObserver: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]
