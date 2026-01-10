# wangji9.github.io


## 本地开发

> 注意：线上是静态导出（`out/`），本地开发用 `next dev`（热更新）。页面内容/样式应一致。

- 开发模式：

```cmd
npm install
npm run dev
```

## 构建（生成 out/）

```cmd
npm run build
```

构建完成后会生成 `out/`，这就是 GitHub Pages 实际部署的内容。

## GitHub Pages 部署

仓库已包含工作流：`.github/workflows/deploy.yml`。

### 需要在 GitHub 仓库设置中打开 Pages

1. 进入 GitHub 仓库 → **Settings** → **Pages**
2. 在 **Build and deployment** 里选择 **Source: GitHub Actions**
3. 推送到 `master` 分支后会自动部署

部署成功后访问：`https://wangji9.github.io/`

## 如果将来要部署到“项目站点”子路径

当前仓库是用户站点（`<user>.github.io`），默认 **不需要** basePath。

如果未来要部署到 `https://<user>.github.io/<repo>/` 这种项目站点，可在构建时设置：

```cmd
set PROJECT_BASE_PATH=/wangji9
npm run build
```

对应配置在 `next.config.ts`：`basePath/assetPrefix` 会读取 `PROJECT_BASE_PATH`。
