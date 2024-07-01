# Minimal example of https://github.com/vitejs/vite/issues/11813

Node.js requires .js extensions on relative imports in an ESM project. 

```npm start``` executes successfully.

Vitest is unable to resolve a `.js` import to a `.ts` source file.

```npm test``` fails with:
```
 FAIL  main.spec.ts [ main.spec.ts ]
Error: Failed to load url ./bar.js (resolved id: ./bar.js) in /Users/christopher.wheeldon/code/vitest-ts/foo.js. Does the file exist?
 ❯ loadAndTransform node_modules/vite/dist/node/chunks/dep-C1-ZB6nQ.js:52400:17
```

Can be fixed by using `@rollup/plugin-typescript` in vitest.config.ts.
