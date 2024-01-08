const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('ShoppingCart', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    })
}
