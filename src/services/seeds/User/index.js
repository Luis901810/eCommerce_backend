const { User } = require('../../../db')
const getUserRoles = require('../../../handlers/UserRol/getUserRol')
const getUserStatus = require('../../../handlers/UserStatus/getUserStatus')
const getUserGender = require('../../../handlers/UserGender/getUserGender')

const data = [
    {
        name: 'Luis Mesajil',
        email: 'lhmesajil@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo'
    },
    {
        name: 'Kevin Padilla',
        email: 'kevin0696s@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo'
    },
    {
        name: 'Luis Barrios',
        email: 'luis901810@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo'
    },
    {
        name: 'Alexis Porcelano',
        email: 'alexisporcelano@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo'
    },
    {
        name: 'Sebastian Kang',
        email: 'kangsebastian43@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo'
    },
    {
        name: 'Ana Rosales',
        email: 'ana123@gmail.com',
        password: 'pass123',
        rol: 'Cliente',
        gender: 'Femenino',
        status: 'Activo'
    },
    {
        name: 'Julia Ramirez',
        email: 'julia123@gmail.com',
        password: 'pass123',
        rol: 'Cliente',
        gender: 'Otro',
        status: 'Inactivo'
    },
    {
        name: 'Gloria Willians',
        email: 'gloria123@gmail.com',
        password: 'pass123',
        rol: 'Invitado',
        gender: 'Femenino',
        status: 'Activo'
    }
]

module.exports = async () => {
    try {
        const [
            rolesData,
            statusData,
            genderData
        ] = await Promise.all([
            getUserRoles(),
            getUserStatus(),
            getUserGender()
        ])

        // Insertar los usuarios si no existen
        await Promise.all(data.map(async (user) => {
            const roleId = rolesData.find(({ rol }) => rol === user.rol)?.id || null
            const statusId = statusData.find(({ status }) => status === user.status)?.id || null
            const genderId = genderData.find(({ gender }) => gender === user.gender)?.id || null

            await User.findOrCreate({
                where: {
                    email: user.email,
                    phoneNumber: user.phoneNumber || null
                },
                defaults: {
                    name: user.name,
                    password: user.password,
                    roleId,
                    statusId,
                    genderId
                }
            })
        }))

        console.log('Usuarios insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar usuarios:', error)
    }
}
