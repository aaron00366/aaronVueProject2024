# 发生任何错误时终止
set -e

# 构建
npm run build

# 进入输出产物文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@github.com:aaron00366/aaronVueProject2024.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f https://aaron00366.github.io/aaronVueProject2024.git main:gh-pages
# git push -f https://github.com/aaron00366/aaronVueProject2024.git master:gh-pages

cd -