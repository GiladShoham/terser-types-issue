# terser-types-issue
A repo to reproduce terser types issue

# run project
```
npm install
npm run typescript
```

Getting error:
```
error TS2322: Type '{ minify: false; minifyWhitespace: true; minifyIdentifiers: false; minifySyntax: true; }' is not assignable to type 'MinimizerOptions<MinifyOptions>'.
  Object literal may only specify known properties, and 'minify' does not exist in type 'MinimizerOptions<MinifyOptions>'.

10           minify: false,
             ~~~~~~


Found 1 error in my-webpack-config.ts:10
```
