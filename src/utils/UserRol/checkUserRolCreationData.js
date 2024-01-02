module.exports = (req) => {
    const validators = [
        {
            validate: (req) => req.body.rol,
            msg: 'Nombre del Rol es obligatorio'
        },
        {
            validate: (req) => req.body.description,
            msg: 'Descripción del Rol es obligatorio'
        },
        {
            validate: (req) => typeof req.body.rol === 'string',
            msg: 'Nombre del Rol debe ser un string'
        },
        {
            validate: (req) => typeof req.body.description === 'string',
            msg: 'Descripción del Rol debe ser un string'
        }
    ]

    for (let i = 0; i < validators.length; i++) {
        const { validate, msg } = validators[i]
        if (!validate(req)) return { error: true, msg }
    }

    return { error: false }
}
