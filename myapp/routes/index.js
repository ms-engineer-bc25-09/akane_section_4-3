var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello');
  const name = req.query.name;
  if (name) {
    res.json({ title: 'Hello! ' + name + ' By Express'});
  } else {
    res.json({ title: 'Hello Express!'});
  }
});

// 関数を追加
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw '数字以外は入力できないよ!';
  }
  return width * height; // 面積を求める処理
}

// 新しいルートで面積を計算する例
router.post('/calculate-area', function(req, res, next) {
  try {
    const width = req.body.width;
    const height = req.body.height;
    
    const area = getRectArea(width, height); // 面積を計算
    res.status(200).json({ area: area }); // 結果を返す
  } catch (e) {
    console.error(e); // エラーメッセージを出力
    res.status(400).json({ error: e }); // エラーレスポンスを返す
  }
});


router.post('/', function(req, res, next) {
  if (req.body.name === 'tanaka') {
    console.error('error');
  }
  res.status(200).json({ status: ok });
});

// ユーザー情報を更新するAPI (PUT)
router.put('/', function(req, res, next) {
  // 何か適当なエラー処理
  res.status(200).json({ status: "ok" });
});

module.exports = router;
