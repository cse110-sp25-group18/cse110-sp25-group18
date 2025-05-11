# What is ESLint?
A linter is a program that will analyze code for potential errors, whether those are syntax, style problems, or things that may lead to actual errors down the line, for example, a variable that is declared but never used.

ESLint is a linter for JavaScript that will allow us to maintain consistent style and syntax throughout the whole project, to give the appearance that all our code was written by one person.
# Code Style Guidelines
Everything in ESLint's recommended rules will be enforced. They're all pretty obvious, and catch things that are usually mistakes anyways. This includes things like:
- [No unused variables](https://eslint.org/docs/latest/rules/no-unused-vars)
- [No duplicate conditions in if-else-if chains](https://eslint.org/docs/latest/rules/no-dupe-else-if)
- [No fallthrough of case statements](https://eslint.org/docs/latest/rules/no-fallthrough)
- And many other rules that can be viewed [here](https://eslint.org/docs/latest/rules/) (all the ones with a ✅)

In addition, some of the [Google Style Guidelines](https://google.github.io/styleguide/jsguide.html) for JavaScript will be enforced to help us all write homogenous code. The additional rules that will be enforced will be
- [Braces used for all control structures](https://google.github.io/styleguide/jsguide.html#formatting-braces-all)
- [K&R style for braces](https://google.github.io/styleguide/jsguide.html#formatting-nonempty-blocks)
- [Indentation level of 2 spaces](https://google.github.io/styleguide/jsguide.html#formatting-block-indentation)
- [One statement per line](https://google.github.io/styleguide/jsguide.html#formatting-one-statement-perline)
- [Semicolons are required](https://google.github.io/styleguide/jsguide.html#formatting-semicolons-are-required)
# How to install ESLint
You can install ESLint with this command
```sh
npm init @eslint/config@latest
```
- This command will take you through a configuration step. Everything can be kept default **EXCEPT**, for the `Which framework does your project use?` make sure to select `none` using the arrow keys and spacebar.

You will also need to install ESLint-Stylistic with this command:
```sh
npm i -D @stylistic/eslint-plugin
```

For a more detailed installation guide, check out [this](https://eslint.org/docs/latest/use/getting-started) link for ESLint, and [this one](https://eslint.style/packages/default)
for ESLint-Stylistic.

These steps should have created a file called `eslint.config.js` (or `eslint.config.mjs`). To complete the setup, modify your config file to look like this:
```js
// eslint.config.js or eslint.config.mjs

import js from "@eslint/js";
import globals from "globals";
import stylisticJs from '@stylistic/eslint-plugin-js'
import { defineConfig } from "eslint/config";  

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { 
    plugins: {
      "@stylistic/js": stylisticJs
    }
  },

  {
    rules: {
      curly: "error",
      "@stylistic/js/semi": ["error", "always"],
      "@stylistic/js/brace-style": "error",
      "@stylistic/js/indent": ["error", 2, {"SwitchCase": 1}],
      "@stylistic/js/max-statements-per-line": ["error", { "max": 1 }]
  }
  }
]);
```