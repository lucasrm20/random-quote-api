const { Router }        = require('express');
const IndexController   = require('../controllers/index.controller');

const router = Router();

router.get('/', IndexController.index);

module.exports = router;
