const { Op } = require('sequelize')
const { Shoe,ShoeCategory } = require('../../db')

const createShoe = async(req, res) => {
    const {
        name,
        description,
        price,
        image,
        stock,
        discountPercentage,
        size,
        color,
        brand,
        material,
        gender,
        category,
    } = req.body

    try{
        
        let newCategory = []
        for (item in category){
            
           const [itemDB,itemCreated] = await  ShoeCategory.findOrCreate({
                where:{category: category[item]},
                defaults:{
                    category:category[item],
                    description:category[item]
                }
            })
            newCategory.push(itemDB)
        }

        const [newShoe, created] = await Shoe.findOrCreate({
            where:{
                [Op.and]:[{name:name.toLowerCase()},{sizeId:size},{colorId:color}, {brandId:brand},{genderId: gender}]
            },
            defaults:{
                name: name.toLowerCase(),
                description: description,
                price: price,
                image: image,
                stock: stock,
                discountPercentage: discountPercentage,
                sizeId:size,
                colorId:color,
                brandId:brand,
                materialId:material,
                genderId: gender

            }
        })
        if (!created) {
            return res.status(400).send({ message: "The shoe already exists" });
        }
        await newShoe.addShoeCategory(newCategory)
        return res.status(200).json({message:"The shoe was created successfully"})
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = createShoe;