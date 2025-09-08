## 模版

这是一个基于 `Vite + Vue3 + TypeScript` 的 `mono-repo` 项目

环境：`node >= 20`，`pnpm >= 10`

## 目录结构

- `apps`: 存放各个子应用
  - `app1`: 子应用
- `packages`: 存放各个子包
  - `shared`: 公共组件库
- `dist`: 打包输出目录

## 开发

通过 `.env` 配置路由前缀

- `pnpm dev:app1` 启动 `app1` 应用
- `pnpm build:app1` 打包 `app1` 应用
- `pnpm build` 打包所有应用

##
