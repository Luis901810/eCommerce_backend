const { UserRol } = require('../../db')

module.exports = async (req, res) => {
    try {
        const rol = await UserRol.findByPk(req.params.id)
        if (!rol) { return res.status(404).json({ error: 'Rol de usuario no encontrado' }) }
        await rol.destroy()
        return res.json('Rol de usuario eliminado correctamente')
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
