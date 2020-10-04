# vuetify-with-purgecss-app

## description

vuetify を利用している vue アプリケーションの `purgecss`の設定方法を試行

2020/10/4 　現在はこのバージョンを入れている

```
"vuetify": "^2.2.11"
"@fullhuman/postcss-purgecss": "^3.0.0"
"@fullhuman/vue-cli-plugin-purgecss": "~3.0.1"
```

## Setup

アプリのディレクトリでプラグインを追加

```
vue add @fullhuman/purgecss
```

`postcss.config.js`が追加されるので本リポジトリ`postcss.config.js`の値をいれる。
