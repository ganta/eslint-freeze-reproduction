# ESLint freeze reproduction

This is a repository that reproduces the pattern of ESLint freezing.

## Freezing conditions

- Pass the function that defines `Visitor` type of [unist-util-visit](https://github.com/syntax-tree/unist-util-visit) to `visit` function.
- Specify @typescript-eslint/recommended-requiring-type-checking to `extends` in eslintrc.

## Run the reproduction code

### Pattern to freeze

```shell
npm run eslint:freeze
```

- The function have `Visitor` type specified: [`src/freeze.ts`](src/freeze.ts)
- eslintrc have @typescript-eslint/recommended-requiring-type-checking specified: [`.eslintrc.js`](.eslintrc.js)

### Patterns that do not freeze: A

```shell
npm run eslint:nofreeze-a
```

- The function does not have `Visitor` type specified: [`src/no-freeze.ts`](src/no-freeze.ts)

### Patterns that do not freeze: B

```shell
npm run eslint:nofreeze-b
```

- eslintrc does not have @typescript-eslint/recommended-requiring-type-checking specified: [`.eslintrc.no-freeze.js`](.eslintrc.no-freeze.js)
