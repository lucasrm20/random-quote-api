const models = require('../../database/models');

const index = async (req, res, next) => {
  try {
    const quotes = await models.Quote.findAll({
      attributes: ['quote', 'author']
    });

    return res.json(quotes);

  } catch(err) {
    next(err);
  }
};

const random = async (req, res, next) => {
  try {
    const quote = await models.Quote.findOne({
      attributes: ['quote', 'author'],
      order: models.sequelize.random()
    });

    return res.json(quote);

  } catch(err) {
    next(err);
  }
};

module.exports = {
  index,
  random
};
