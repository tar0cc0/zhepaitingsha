# 这牌听啥啊 / What Tiles Am I Waiting For?

一款麻将清一色听牌训练工具，随机生成手牌，支持4张/7张/10张/13张牌型，对新手友好。

A Mahjong training tool for practicing single-suit ready hands. Hands are randomly generated. You may switch between 4/7/10/13-tile hands so that it is easier for beginners.

网页链接如下：

https://tar0cc0.github.io/zhepaitingsha/

To get started, visit the link below:

https://tar0cc0.github.io/zhepaitingsha/?lang=en

## Tech Stack

The project was created using vanilla HTML/CSS/JavaScript and hosted as a GitHub page. `npm` is used for unit tests.

## Run Unit Tests

```shell
$ npm install --save-dev jest  # Install jest if not yet
$ npm test
```

npm install lodash-es
npm install --save-dev vite

## Deploy to GitHub Pages

The GitHub page targets the `gh-pages` branch where the `/src` folder is maintained as a subtree.

```shell
$ git subtree push --prefix src origin gh-pages  # Push latest version of /src as subtree to gh-pages branch
```

## Credit

Mahjong tile images used in this project were generated using the open source tool:

https://github.com/black-desk/mahjim

Some unit test cases were created based on examples from the following links:

https://www.zhihu.com/column/c_1759702061858566144

https://mj-dragon.com/wait/basic/machi-five.html

https://hinakin.main.jp/mckonweb/

Deploying a subfolder to GitHub Pages:

https://gist.github.com/cobyism/4730490?permalink_comment_id=4736084
