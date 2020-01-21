'use strict';

const DEFAULT_DATA = require('../../src/util/default-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Quotes', DEFAULT_DATA.quotes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Quotes', null, {});
  }
};
