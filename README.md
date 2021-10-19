### React Vite app test run
 
 >  Steps to install React Vite App.
 -  npm init @vitejs/app (Once entered type folder name and select react library)
 -  npm install (Install all the dependencies)
#### Default vite.config.js
``` javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
```
 -  npm install --save-dev vite-preset-react
 -  npm install --save-dev vite-plugin-svgr
#### Update vite.config.js
``` javascript
import { defineConfig } from 'vite'
import react from "vite-preset-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
```
