# ディレクトリ構成について

「ヘキサゴナルアーキテクチャ」を取り入れつつ、React / Reduxに馴染ませています。

ベースは、[「実装 - Hexagonal Redux -
」](https://qiita.com/Takepepe/items/af72bcdfcb1ad09bc143)
を参考にしています。

<img src="https://camo.qiitausercontent.com/bc7eb53219d3231975b96061e81f45efbad4075b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f35393037312f65336261306165352d383766392d653861652d646338372d3134356432303735643763642e706e67" width="400">


## Root Dir
```zsh
/__tasks/     # データベースの生成等のタスクスクリプトを格納しています。
/config/      # プロジェクト共通で利用するパスやポート等を宣言しています。
/docs/        # ドキュメントを格納しています。
/client/      # クライアントサイドの開発ファイルです。
/flow-typed/  # 型宣言ファイルです。主にパッケージやドメインモデルの型をdeclareしています。
/htdocs/      # releaseタスクのアウトプットディレクトリです。
/public/      # previewタスクのアウトプットディレクトリです。
/server/      # サーバサイドの開発ファイルです。
/webpack/     # webpackのconfigコンポーネントファイルです。
```


### Client Script Dir
```zsh
/adapter/       # redux-sagaによる非同期通信ファイルやView Providerを格納しています。
/domain/        # ドメインモデルを格納しています。
/entrypoints/   # webpackのentrypointです。必要なSagaやViewはこちらでImportします。
/port/          # reducerやstoreを構築する関数等を格納しています。
/presentation/  # JavaScriptで記述するReact Viewを格納しています。
```

### 参考

* [実装 - Hexagonal Redux -](https://qiita.com/Takepepe/items/af72bcdfcb1ad09bc143)
* [takefumi-yoshii/redux-ddd-example](https://github.com/takefumi-yoshii/redux-ddd-example)
* [azu/faao](https://github.com/azu/faao)
* [DDD超入門(後編) - Domain-Driven Designの適用Step](http://enterprisegeeks.hatenablog.com/entry/2016/07/25/081127)
