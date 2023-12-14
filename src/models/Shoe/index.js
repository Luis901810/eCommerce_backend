const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Shoe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin descripción'
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                min: 0
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: {
                    msg: 'El enlace de la imagen de zapato no es válido'
                }
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0
            }
        },
        discountPercentage: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        },
        deleteAt: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: null
        }
    })
}
