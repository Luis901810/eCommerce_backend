const { Op } = require("sequelize")

module.exports = (shoeFilters) => {

    let filters = {}
    const {
        name,
        pricemin,
        pricemax,
        stock,
        discountPercentage,
        size,
        color,
        brand, material, gender
    } = shoeFilters

    if (name) filters["name"] = { [Op.iLike]: "%" + name.toLowerCase().trim() + "%" }
    if (pricemin & pricemax) filters["price"] = {[Op.between]:[pricemin, pricemax]}
    if (stock) filters["stock"] = { [Op.lte]: Number(stock)}
    if (discountPercentage) filters["discountPercentage"] = { [Op.gt]:0, [Op.lte]:discountPercentage}
    if (size) filters["sizeId"] = { [Op.eq]: size}
    if (color) filters["colorId"] = { [Op.eq]: color}
    if (brand) filters["brandId"] = { [Op.eq]: brand}
    if (material) filters["materialId"] = { [Op.eq]: material}
    if (gender) filters["genderId"] = { [Op.eq]: gender}
   

    return filters
}