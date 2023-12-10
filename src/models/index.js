module.exports = (sequelize) => {
    require('./User')(sequelize)
    require('./User/UserRol')(sequelize)
    require('./User/UserGender')(sequelize)
    require('./User/UserStatus')(sequelize)
    require('./Shoe')(sequelize)
    require('./Shoe/ShoeBrand')(sequelize)
    require('./Shoe/ShoeCategory')(sequelize)
    require('./Shoe/ShoeColor')(sequelize)
    require('./Shoe/ShoeGender')(sequelize)
    require('./Shoe/ShoeMaterial')(sequelize)
    require('./Shoe/ShoeSize')(sequelize)
    require('./Shoe/ShoeShoeCategory')(sequelize)
    require('./Order')(sequelize)
    require('./Order/OrderLine')(sequelize)
    require('./Order/OrderStatus')(sequelize)

    const {
        User, UserRol, UserGender, UserStatus,
        Shoe, ShoeSize, ShoeBrand, ShoeCategory, ShoeColor, ShoeGender, ShoeMaterial,
        ShoeShoeCategory,
        Order, OrderStatus, OrderLine
    } = sequelize.models

    // User

    UserRol.hasMany(User, { foreignKey: 'roleId' })
    User.belongsTo(UserRol, { foreignKey: 'roleId' })

    UserGender.hasMany(User, { foreignKey: 'genderId' })
    User.belongsTo(UserGender, { foreignKey: 'genderId' })

    UserStatus.hasMany(User, { foreignKey: 'statusId' })
    User.belongsTo(UserStatus, { foreignKey: 'statusId' })

    // Shoe

    ShoeSize.hasMany(Shoe, { foreignKey: 'sizeId' })
    Shoe.belongsTo(ShoeSize, { foreignKey: 'sizeId' })

    ShoeBrand.hasMany(Shoe, { foreignKey: 'brandId' })
    Shoe.belongsTo(ShoeBrand, { foreignKey: 'brandId' })

    ShoeColor.hasMany(Shoe, { foreignKey: 'colorId' })
    Shoe.belongsTo(ShoeColor, { foreignKey: 'colorId' })

    ShoeGender.hasMany(Shoe, { foreignKey: 'genderId' })
    Shoe.belongsTo(ShoeGender, { foreignKey: 'genderId' })

    ShoeMaterial.hasMany(Shoe, { foreignKey: 'materialId' })
    Shoe.belongsTo(ShoeMaterial, { foreignKey: 'materialId' })

    Shoe.belongsToMany(ShoeCategory, { through: ShoeShoeCategory })
    ShoeCategory.belongsToMany(Shoe, { through: ShoeShoeCategory })

    // Order

    OrderStatus.hasMany(Order, { foreignKey: 'statusId' })
    Order.belongsTo(OrderStatus, { foreignKey: 'statusId' })

    User.hasMany(Order, { foreignKey: 'userId' })
    Order.belongsTo(User, { foreignKey: 'userId' })

    Shoe.belongsToMany(Order, { through: OrderLine })
    Order.belongsToMany(Shoe, { through: OrderLine })
}
