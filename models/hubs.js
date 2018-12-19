'use strict';
module.exports = (sequelize, DataTypes) => {
  var hubs = sequelize.define('hubs', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    underscored: true,
  });
  hubs.associate = function(models) {
    // associations can be defined here
  };
  return hubs;
};