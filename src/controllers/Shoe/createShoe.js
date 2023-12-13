const { Op } = require('sequelize')
const { Shoe, ShoeSize, ShoeColor, ShoeBrand, ShoeMaterial, ShoeGender, ShoeCategory } = require('../../db')

const createShoe = async(req, res) => {
    const {
        name,
        description,
        price,
        image,
        stock,
        discountPercentage,
    } = req.body

    let {
        size,
        color,
        brand,
        material,
        gender,
        category,
    } = req.body
    try{
        const [sizeDB , sizCreated] = await ShoeSize.findOrCreate({
            where:{size: size},
            defaults:{
                size:size,
                description:size
            }
        })

        color = color.toLowerCase()
        const [colorDB, colorCreated] = await ShoeColor.findOrCreate({
            where:{color: color},
            defaults:{
                color:color,
                rgbValue: color,
                description:color
            }
        })

        brand = brand.toLowerCase()
        const [brandDB, brandCreated] = await ShoeBrand.findOrCreate({
            where:{brand: brand},
            defaults:{
                brand:brand,
                description:brand
            }
        })

        material = material.toLowerCase()
        const [materialDB, materialCreated] = await ShoeMaterial.findOrCreate({
            where:{material: material},
            defaults:{
                material:material,
                description:material
            }
        })

        gender = gender.toLowerCase()
        const [genderDB, genderCreated] = await ShoeGender.findOrCreate({
            where:{gender: gender},
            defaults:{
                gender:gender,
                description:gender
            }
        })
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
                [Op.and]:[{name:name},{sizeId:sizeDB.id},{colorId:colorDB.id}, {brandId:brandDB.id},{genderId: genderDB.id}]
            },
            defaults:{
                name: name,
                description: description,
                price: price,
                image: image,
                stock: stock,
                discountPercentage: discountPercentage,
                sizeId:sizeDB.id,
                colorId:colorDB.id,
                brandId:brandDB.id,
                materialId:materialDB.id,
                genderId: genderDB.id

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