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
