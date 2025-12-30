# 这牌听啥啊 / What Does This Hand Wait For?

一款麻将清一色听牌训练工具，随机生成手牌，支持4张/7张/10张/13张牌型，对新手友好。

A Mahjong training tool for practicing single-suit ready hands. Hands are randomly generated. You may switch between 4/7/10/13-tile hands so that it is easier for beginners.

网页链接如下：

https://zpts.net/

To get started, visit the link below:

https://zpts.net/?lang=en

## Tech Stack

The project was created using vanilla HTML/CSS/JavaScript and hosted with GitHub Pages. [Vite](https://github.com/vitejs/vite) is used for project bundling. [Jest](https://github.com/jestjs/jest) is used for unit tests.

## Run Unit Tests

```shell
$ npm test
```

## Test the App Locally

```shell
$ npm run dev
```

Or:

```shell
$ npm run preview  # Need to be run after the build
```

## Build

```shell
$ npm run build
```

Build output will be placed in the `/dist` folder.

## Deploy to GitHub Pages

The GitHub page targets the `gh-pages` branch where the `/dist` folder is maintained as a subtree.

```shell
$ git subtree push --prefix dist origin gh-pages  # Push latest version of /dist as subtree to gh-pages branch
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
