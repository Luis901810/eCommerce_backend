const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('OrderLine', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1
            }
        },
        unitPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0,
        },
    })
}