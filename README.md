# Electron-Vite-TS-Stackter

An Electron + Vue 3 starter project setup with Vite, Typescript, Vue-Router, Pinia, Eslint, Prettier, Tailwind CSS, and some custom preferences.

This repository is an extended version of [the simple one](https://github.com/electron-vite/electron-vite-vue).

![electron-vite-vue.gif](/public/electron-stackter.gif)

## Features

📦 Out of the box

🎯 Based on the official [template-vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts), less invasive

🌱 Extensible, really simple directory structure

💪 Support using Node.js API in Electron-Renderer

🔩 Support C/C++ native addons

🖥 It's easy to implement multiple windows

🚀 configured with Eslint & Prettier

🚀 Vue router support

🚀 Pinia state management

🚀 TailwindCSS (Dark mode support)

🚀 VueUse

🚀 Easy dependency update with taze

🚀 I18n support - multiple locales

## Get Started

### 1. Install packages

```bash
npm i
or,
pnpm i --shamefully-hoist
```

### 2. Run

In development mode,

```bash
npm run app:dev
or,
pnpm run app:dev
```

In preview mode,

```bash
npm run app:preview
or,
pnpm run app:preview
```

To build for production,

```bash
npm run app:build
or,
pnpm run app:build
```

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-Main
+ │ └─┬ preload
+ │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## Be aware

🚨 By default, this template integrates Node.js in the Renderer process. If you don't need it, you just remove the option below. [Because it will modify the default config of Vite](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
  ],
}
```

## FAQ

- [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)
- [C/C++ addons, Node.js modules - Pre-Bundling](https://github.com/electron-vite/vite-plugin-electron-renderer#dependency-pre-bundling)
