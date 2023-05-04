
# Deploy to GitHub Pages

## Create a vite project

 * <https://github.com/tpemartin/111-2-multimedia-publication/blob/main/week8/week8.md>

## Github Desktop

  * <https://desktop.github.com/>

## vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  base: '/econWish/',
  build: {
    outDir: 'docs'
  }
})
```
   * Only `docs` folder will be deployed.
   * Repository name is `econWish` so the base path is `/econWish/`.
