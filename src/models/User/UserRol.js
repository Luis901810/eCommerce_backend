const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const UserRol = sequelize.define('UserRol', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    })
}