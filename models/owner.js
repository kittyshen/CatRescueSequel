module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    // Giving the Owner model a name of type STRING
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{len:[1,30]}
    }
  });

  Owner.associate = function(models) {
    // Associating Owner with Cats
    // When an Owner is deleted, also delete any associated Cats
    Owner.hasMany(models.Cat, {
      onDelete: "cascade"
    });
  };

  return Owner;
};
