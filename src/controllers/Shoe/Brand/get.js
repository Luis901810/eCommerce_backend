const { ShoeBrand } = require('../../../db')

const get = async(req, res) => {
    
    try{
        const data = await ShoeBrand.findAll()
        return res.status(200).json(data)
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = get;