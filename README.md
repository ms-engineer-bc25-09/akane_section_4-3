# debug-express-on-container

VSCode を利用して container 上のアプリケーションをデバッグするサンプルコードです。

※1 本サンプルコードは、講義内のハンズオンでのみ使用するため、JavaScript で記述されています。

※2 ご自身のアプリケーションに組み込む際は、TypeScript でのデバッグ方法を調べながら導入してください。

## 事前準備

.vscode/launch.json の 10〜13 行目を読み、ご自身の使用 PC に合わせて "localRoot" を設定してください。

## デバッグ手順

### コンテナを起動

```bash
docker compose up -d --build
```

### VSCode でデバッグ

`Run and Debug` タブを開き、`Docker: Attach to Node` を選択した状態で、`Start Debugging` ボタンを押下します。

試しに、`/myapp/routes/index.js` の 6 行目にブレークポイントを設置してください。

### ブラウザでアクセス

`http://localhost:3000/` にアクセスして、ブレークポイントが有効になっていることを確認、ステップ実行してください。

次に `http://localhost:3000?name=ms-engineer` にアクセスして、ステップ実行をした際に、処理経路が変わることを確認してください。
