"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Games.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      time: {
        type: DataTypes.TIME,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://static.vecteezy.com/system/resources/thumbnails/003/686/552/small/soccer-logo-america-logo-classic-logo-free-vector.jpg",
      },
      teams: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      status: {
        type: DataTypes.ENUM,
        values: ["pending", "cancel", "done"],
        defaultValue: "pending",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Games",
      paranoid: true,
    }
  );
  return Games;
};
