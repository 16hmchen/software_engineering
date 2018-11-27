var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>{
  res.send('respond with a resource');
});

router.get('/sell', (req, res, next) =>{
  res.render('sell', { title: 'Express' });
})

router.get('/message', (req, res, next) =>{
  res.render('message', { title: 'Express' });
})

router.get('/for_sale', (req, res, next) =>{
  res.render('for_sale', { title: 'Express' });
})

router.get('/what_I_bought', (req, res, next) =>{
  res.render('what_I_bought', { title: 'Express' });
})

router.get('/what_I_sell', (req, res, next) =>{
  res.render('what_I_sell', { title: 'Express' });
})

router.get('/collect', (req, res, next) =>{
  res.render('what_I_collected', { title: 'Express' });
})

router.get('/order', (req, res, next) =>{
  res.render('order', { title: 'Express' });
})

router.get('/profile', (req, res, next) =>{
  res.render('profile', { title: 'Express' });
})


module.exports = router;
