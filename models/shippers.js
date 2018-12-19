'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shipper = sequelize.define('Shipper', {
    name: { type: DataTypes.STRING, field: 'name' },
    email: { type: DataTypes.STRING, field: 'email' },
    address: { type: DataTypes.STRING, field: 'address' },
    isActived: { type: DataTypes.BOOLEAN, field: 'is_actived' },
    mobile: { type: DataTypes.STRING, field: 'mobile' }
  }, {
      underscored: true,
      tableName: 'shippers',
      timestamps: true
    });
  Shipper.associate = function (models) {
    // associations can be defined here
  };
  return Shipper;
};