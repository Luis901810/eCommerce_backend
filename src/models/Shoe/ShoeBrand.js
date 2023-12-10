const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ShoeBrand', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}