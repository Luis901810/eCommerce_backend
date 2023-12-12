const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('ShoeColor', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rgbValue: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
