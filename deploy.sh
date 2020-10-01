#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
git add -A
git commit -m "deployment 3"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:tijmenroes/tijmenroes.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:tijmenroes/portfolio.git master:gh-pages

cd -