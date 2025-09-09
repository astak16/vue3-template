## 模版

这是一个基于 `Vite + Vue3 + TypeScript` 的 `mono-repo` 项目

环境：`node >= 20`，`pnpm >= 10`

## 目录结构

- `apps`: 存放各个子应用
  - `h5`: 子应用
- `packages`: 存放各个子包
  - `shared`: 公共组件库
- `dist`: 打包输出目录

## 开发

通过 `.env` 配置路由前缀

- `pnpm dev:h5` 启动 `h5` 应用
- `pnpm build:h5` 打包 `h5` 应用
- `pnpm build` 打包所有应用

##
