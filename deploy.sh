# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 将博客的本地仓库（.md文件）推送到 <USERNAME>.github.io 远程仓库的主分支
# 注意添加.gitignore文件，可以将src/.vuepress/.cache/ src/.vuepress/.temp/ src/.vuepress/dist/ node_modules 等文件忽略,“src” 可能需要更改，不同的项目可能不同（例如 docs）
git push git@github.com:raylan-chen/raylan-chen.github.io.git master

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# 将生成的静态网页文件推送到 <USERNAME>.github.io 仓库的分支 gh-pages ，主分支当作 .md 文件存放处，gh-pages 分支当作生成的静态网页文件存放处，并且将Github Pages的Source 改成 gh-pages 分支，远程仓库不需要提前生成 gh-pages 分支，推送时会自动创建
git push -f git@github.com:raylan-chen/raylan-chen.github.io.git master:gh-pages

## 发布到 gitee
git push -f git@gitee.com:raylan-chen/blog.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 删除生成的静态网页文件
rm -rf *

#返回上一次访问的文件夹
cd -