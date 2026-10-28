#!/usr/bin/env sh
# 本地手动部署脚本（CI 正常时会自动部署，这个只在需要绕过 Actions 时用）

set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd build

git init
git add -A
git commit -m 'deploy'

# HEAD 指向当前分支，无论本地默认分支叫 master 还是 main 都能推对
git push -f git@github.com:Lvxueliang/lvxl_blog.git HEAD:lvxl-pages

cd -
