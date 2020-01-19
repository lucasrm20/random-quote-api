const { Router }        = require('express');
const QuotesController  = require('../controllers/quotes.controller');

const router = Router();

router.get('/', QuotesController.index);
router.get('/random', QuotesController.random);

module.exports = router;
