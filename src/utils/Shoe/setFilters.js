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
        brand, material, gender, category
    } = shoeFilters

    if (name) filters["name"] = { [Op.iLike]: "%" + name.toLowerCase().trim() + "%" }
    if (pricemin & pricemax) filters["price"] = {[Op.between]:[pricemin, pricemax]}
    if (stock) filters["stock"] = { [Op.lte]: Number(stock)}
    if (discountPercentage) filters["discountPercentage"] = { [Op.gt]:0, [Op.lte]:discountPercentage}
    
    // if (lname) filters["lastName"] = { [Op.iLike]: "%" + lname.toLowerCase().trim() + "%" }
    // if (email) filters["email"] = { [Op.iLike]: "%" + email.toLowerCase().trim() + "%" }
    // if (gender) filters["gender"] = { [Op.iLike]: "%" + gender.toLowerCase().trim() + "%" }
    // if (status) filters["status"] = { [Op.iLike]: "%" + status.toLowerCase().trim() + "%" }
    // if (systemRole) filters["systemRole"] = { [Op.iLike]: "%" + systemRole.toLowerCase().trim() + "%" }

    /**
     * Los filtros startDate y endDate limitan y filtran usuarios por el enrollmentDate
     */

    return filters
}