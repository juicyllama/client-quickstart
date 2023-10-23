module.exports = {
  "ignorePatterns": ["/.github/*", "/cypress/*"],
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:vue/essential",
      "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  "parser": "vue-eslint-parser",
  "plugins": [
      "vue",
      "prettier",
      "@typescript-eslint"
  ],
  "rules": {
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/require-valid-default-prop': 'off',
      'vue/no-mutating-props': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-model-argument': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      "@typescript-eslint/no-var-requires": "off"
  }
}
