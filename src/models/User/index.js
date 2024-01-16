const { DataTypes } = require('sequelize')
const { phoneNumberRegex } = require('../../utils/validators')
const encrypt = require('../../utils/encryption/encrypt')

module.exports = sequelize => {
    sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isEmail: {
                        msg: 'El formato del correo electrónico no es válido',
                    },
                },
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    is: {
                        args: [phoneNumberRegex],
                        msg: 'El formato del número de teléfono no es válido.',
                    },
                },
            },
            isEmailVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isPhoneNumberVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
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
                defaultValue: false,
            },
            firebaseUid: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            hooks: {
                beforeCreate: async user => {
                    user.password = await encrypt(user.password, 10)
                },
                beforeUpdate: async user => {
                    user.password = await encrypt(user.password, 10)
                },
            },
        },
    )
}
