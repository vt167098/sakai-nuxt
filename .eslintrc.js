module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
<<<<<<< HEAD
    '@whoj'
=======
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-essential'
>>>>>>> 2d5dea2 (Initial commit)
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': 'off',
    'no-tabs': 'off',
    'import/no-named-as-default': 'off',
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
<<<<<<< HEAD
    'vue/v-on-event-hyphenation': 'off',
    'vue/custom-event-name-casing': 'off',
=======
>>>>>>> 2d5dea2 (Initial commit)
    'vue/no-v-model-argument': 'off',
    'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ]
<<<<<<< HEAD
};
=======
}
>>>>>>> 2d5dea2 (Initial commit)
