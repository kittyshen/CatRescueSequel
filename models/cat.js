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

  Cat.associate = function(models) {
    // We're saying that a Cat belong to an Owner after adopted
    // A Cat can't be created without an Owner due to the foreign key constraint
    Cat.belongsTo(models.Owner, {
      foreignKey: { 
        allowNull: true
      },
    // constraints: false
    });
  };
  return Cat;
}