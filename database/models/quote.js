'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Quote = sequelize.define('Quote', {
    quote: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});

  Quote.associate = function(models) {
    // associations can be defined here
  };
  
  return Quote;
};
