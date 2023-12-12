const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('UserStatus', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
