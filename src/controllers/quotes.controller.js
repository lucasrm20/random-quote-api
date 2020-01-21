const models = require('../../database/models');

const index = async (req, res) => {
  try {
    const quotes = await models.Quote.findAll({
      attributes: ['quote', 'author']
    });

    return res.json(quotes);

  } catch(err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const random = async (req, res) => {
  try {
    const quote = await models.Quote.findOne({
      attributes: ['quote', 'author'],
      order: models.sequelize.random()
    });

    return res.json(quote);

  } catch(err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  index,
  random
};
