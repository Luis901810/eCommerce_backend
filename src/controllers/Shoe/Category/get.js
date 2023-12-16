const { ShoeCategory } = require('../../../db')

const get = async(req, res) => {
    
    try{
        console.log("Estoy aqui")
        const data = await ShoeCategory.findAll()
        return res.status(200).json(data)
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = get;