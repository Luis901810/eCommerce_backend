const { Op } = require("sequelize")

module.exports = (shoeFilters) => {

    const getArray = (arrayWithComas) =>{
        return arrayWithComas.split(",")
    }
    let filters = {}
    const {
        name,
        pricemin,
        pricemax,
        stock,
        discountPercentage,
        sizes,
        colors,
        brands, materials, genders
    } = shoeFilters

    filters["deleteAt"] = {[Op.is]: null}
    if (name) filters["name"] = { [Op.iLike]: "%" + name.trim() + "%" }
    if (pricemin & pricemax) filters["price"] = {[Op.between]:[pricemin, pricemax]}
    if (stock) filters["stock"] = { [Op.lte]: Number(stock)}
    if (discountPercentage) filters["discountPercentage"] = { [Op.gt]:0, [Op.lte]:discountPercentage}
    if (sizes) filters["sizeId"] = { [Op.in]: getArray(sizes)}
    if (colors) filters["colorId"] = { [Op.in]: getArray(colors)}
    if (brands) filters["brandId"] = { [Op.in]: getArray(brands)}
    if (materials) filters["materialId"] = { [Op.in]: getArray(materials)}
    if (genders) filters["genderId"] = { [Op.in]: getArray(genders)}
   

    return filters
}