const { User, UserRol } = require('../../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body

        // Validar correo
        if (!email)
            return res.status(400).json({ error: 'Debe ingresar una email' })

        // * Obtener usuario
        const options = {
            where: { email },
            include: [
                {
                    model: UserRol, // * Para generar el token
                    attributes: ['rol'],
                },
            ],
        }
        const user = await User.findOne(options)

        // Validar usuario existente
        if (!user) {
            return res
                .status(400)
                .json({ error: 'Datos de logeo incorrectos.' })
        }

        // * Validar password (si es requerido). Por defecto es requerido
        const usePassword = req.body.usePassword !== false
        if (usePassword) {
            if (!password)
                return res
                    .status(400)
                    .json({ error: 'Debe ingresar una password' })

            // * Valida que la password sea correcta
            const isValidPassword = await bcrypt.compare(
                password,
                user.password,
            )

            if (!isValidPassword)
                return res
                    .status(400)
                    .json({ error: 'Datos de logeo incorrectos.' })
        }

        // * Generar token de la sesión
        const token = jwt.sign(
            { id: user.id, role: user.UserRol?.rol },
            process.env.JWT_SECRET,
            {
                expiresIn: 60 * 60 * 24 * 6,
            },
        )

        // Return Response
        res.status(201).json({ auth: true, token, user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
