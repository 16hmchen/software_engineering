var express = require('express');
var router = express.Router();
var getVerificationCode = require('../js/svgCaptcha').getCode;
var session = require('express-session');

router.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 } }));
/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

router.get('/notlogin', (req, res, next) =>{
  res.render('index_not_login', { title: 'Express' });
});

/* getVerificationCode  */
router.get('/getVerificationCode', (req, res, next) =>{
  var captcha = getVerificationCode();
  req.session.captcha = captcha.text; //存session用于验证接口获取文字码
  var codeData = {
      img: captcha.data
  }
  res.send(codeData.img);
})

/* show the goods */
/* 通配符 * 代表商品的id */
router.get('/sg/*', (req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  res.render('goods_show', { title: 'Express' , img: req.params[0]});
})

module.exports = router;
