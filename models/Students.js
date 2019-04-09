'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    user_id: DataTypes.INTEGER,
    student: DataTypes.STRING,
    selected_count: DataTypes.INTEGER,
    absent: DataTypes.BOOLEAN
  }, {});
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};