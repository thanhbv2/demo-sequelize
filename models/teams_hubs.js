'use strict';
module.exports = (sequelize, DataTypes) => {
  var teams_hubs = sequelize.define('teams_hubs', {
    team_id: DataTypes.INTEGER,
    hub_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  teams_hubs.associate = function(models) {
    // associations can be defined here
  };
  return teams_hubs;
};