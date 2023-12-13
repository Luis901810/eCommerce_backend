const { Op } = require('sequelize')
const { Shoe, ShoeSize, ShoeColor, ShoeBrand, ShoeMaterial, ShoeGender, ShoeCategory } = require('../../db')
const setFilters = require('../../utils/Shoe/setFilters')
const setUpSorting = require('../../utils/Shoe/setUpSorting')
const setOffsetAndLimit = require('../../utils/Pagination/setOffsetAndLimit')
const {literal} = require('sequelize')

const getAllShoes = async(req, res) => {
    try{
        let options = { where: {}, order: [] };  // Sequelize options object for findAll

        options["where"] = setFilters(req.query)
        options["order"] = setUpSorting(req.query)

        // Set up pagination
        const { offset, limit } = setOffsetAndLimit(req.query.page, req.query.limit);
        options["offset"] = offset
        options["limit"] = limit
        
        let{category} = req.query
        // category = category.replace("[","").replace("]","").split(",")
        // console.log(category, category.length)
        if(category){
            options["include"] = [
                {
                    model: ShoeCategory,
                    as: 'ShoeCategories',
                    where: { category : {
                        [Op.eq]: category
                    }}
                }
            ]
            // options["having"] = literal(`COUNT(DISTINCT "ShoeCategories".category) = ${category.length}`)
            // options["group"] = ["Shoe.id"]
        } else {
            options["include"] = [
                {
                    model:ShoeCategory
                }
            ]
        }

        // Use Sequelize findAll with the specified options
        const data = await Shoe.findAll(options);
        return res.status(200).json(data)
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = getAllShoes;