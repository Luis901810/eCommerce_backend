const { DataTypes } = require('sequelize');
const { phoneNumberRegex } = require('../../utils/validators');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'El formato del correo electrónico no es válido'
                }
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                is: phoneNumberRegex,
                msg: `El formato del número de teléfono no es válido. Se esperaba ${phoneNumberRegex}`
            }
        },
        isEmailVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isPhoneNumberVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            validate: {
                isDate: true,
                isBefore: new Date().toISOString().split('T')[0],
            },
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: {
                    msg: 'El enlace de la imagen de perfil no es válido',
                },
            },
        },
        twoFactorEnabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    })
}