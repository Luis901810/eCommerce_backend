const { Shoe } = require('../../db')

const deleteShoe = async (req, res) => {
    try {
        const { id } = req.params

        const shoe = await Shoe.findByPk(id)

        if (!shoe) return res.status(404).json({ error: 'Zapato no encontrado' })

        await shoe.update({ deleteAt: true })

        return res.status(200).json(shoe)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = deleteShoe
