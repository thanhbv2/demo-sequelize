'use strict';
module.exports = (sequelize, DataTypes) => {
  var teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
  });
  teams.associate = function(models) {
    // associations can be defined here
  };
  return teams;
};