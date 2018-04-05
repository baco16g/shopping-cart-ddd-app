# 開発環境Tips

## Linter / Prettier

今まで、複数人で開発を行う際に以下の事象が発生しがちでした。

* 開発者によって、コードスタイルが異なり、統一感がなくなる
  * エディタやCompilerによっては、GitのDiffがカオスになる。
* 改修後、不要になったコードが放置されている
  * 引き継いだ際に、必要可否が判断できず、さらに積み残しされ、カオスになる。

LinterやPrettierを使って、上記のような事象を減らしていきましょう。

### Prettierとは

コードフォーマッターです。スクリプトを叩くだけで、設定した通りのフォーマットに整形してくれます。

`JavaScript, Flow, TypeScript, CSS, SCSS, Less, JSX, Vue, GraphQL, JSON, Markdown`に対応しています。

LinterのAuto Fixingを拡張するパッケージと思えばよいです。

ちなみに、エディタの拡張パッケージも存在しており、場合によってはスクリプトを叩かずとも、整形してくれたりもします。

参考：[「Prettier 入門 ～ESLintとの違いを理解して併用する～」](https://qiita.com/soarflat/items/06377f3b96964964a65d)


## Git hooks

Linter / Prettierは理解したが、誰もスクリプトを叩かずに形骸化してしまう恐れがあります。

そこで、Git hooksを利用しましょう。

`husky`や`lint-staged`に頼れば、`git commit`の直前に任意のスクリプトを走らせることができます。

以下のように、linterやformaterを走らせれば、気にせずともコミットのタイミングでチェック・整形してくれます。

```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "client/scripts/**/*.js": [
      "yarn format:js",
      "yarn lint:js",
      "git add"
    ],
    "client/stylus/**/*.styl": [
      "yarn format:css",
      "yarn lint:css",
      "git add"
    ],
    "client/templates/**/*.pug": [
      "yarn lint:pug",
      "git add"
    ]
  }
}
```

ちなみに、GUIツール（Source Tree等）には、未対応のようです...。

したがって、Commit時は、ターミナルやEditorのGit Panelの利用が必須です。


## Flow

ご存知の通り、静的型チェッカーです。

API連携等を行う複雑な処理を実装する場合は、静的型チェッカーは必須ですよね。

しかし、Flowは処理が重いので、素直にTypeScriptを使ったほうが無難な気がしました。
