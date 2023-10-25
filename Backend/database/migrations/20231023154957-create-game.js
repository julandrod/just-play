'use strict';

const {DataTypes} = require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
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
      time:{
        allowNull: false,
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt:{
        allowNull: true,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};