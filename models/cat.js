module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define("Cat", {
    cat_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1-40]
      }
    },
    rescued: {
      type: DataTypes.BOOLEAN,
      defaultValue: false    }
  });
  return Cat;
}