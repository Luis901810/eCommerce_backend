const createUser = require('../../../handlers/User/createUser')
const getUserRoles = require('../../../handlers/UserRol/getUserRol')
const getUserStatus = require('../../../handlers/UserStatus/getUserStatus')
const getUserGender = require('../../../handlers/UserGender/getUserGender')
const getAuthMethod = require('../../../handlers/UserAuthMethod/getAuthMethod')

const data = [
    {
        name: 'Luis Mesajil',
        email: 'lhmesajil@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Kevin Padilla',
        email: 'kevin0696s@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Luis Barrios',
        email: 'luis901810@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Alexis Porcelano',
        email: 'alexisporcelano@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Sebastian Kang',
        email: 'kangsebastian43@gmail.com',
        password: 'pass123',
        rol: 'Administrador',
        gender: 'Masculino',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Usuario cliente',
        email: 'cliente@gmail.com',
        password: 'pass123',
        rol: 'Cliente',
        gender: 'Otro',
        status: 'Activo',
        authMethod: 'App'
    },
    {
        name: 'Usuario invitado',
        email: 'invitado@gmail.com',
        password: 'pass123',
        rol: 'Invitado',
        gender: 'Femenino',
        status: 'Activo',
        authMethod: 'App'
    }
]

module.exports = async () => {
    try {
        const [
            rolesData,
            statusData,
            genderData,
            authMethodData
        ] = await Promise.all([
            getUserRoles(),
            getUserStatus(),
            getUserGender(),
            getAuthMethod()
        ])

        // Insertar los usuarios si no existen
        await Promise.all(data.map(async (user) => {
            const roleId = rolesData.find(({ rol }) => rol === user.rol)?.id || null
            const statusId = statusData.find(({ status }) => status === user.status)?.id || null
            const genderId = genderData.find(({ gender }) => gender === user.gender)?.id || null
            const authMethodId = authMethodData.find(({ authMethod }) => authMethod === user.authMethod)?.id || null
            const { name, email, password } = user
            await createUser({
                name,
                email,
                password,
                roleId,
                statusId,
                genderId,
                authMethodId,
                includeDeleted: false
            })
        }))

        console.log('Usuarios insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar usuarios:', error)
    }
}
