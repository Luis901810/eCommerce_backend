const { Shoe, ShoeCategory } = require("../../db")

const getShoeById = async (req, res) => {

    try {
        const { id } = req.params
        
        const shoe = await Shoe.findByPk(id, {include:ShoeCategory})

        if (!shoe)
            return res.status(404).json({ error: "Zapato no encontrado" });

        return res.status(200).json(shoe)
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: error.message })
    }
}

module.exports = getShoeById;