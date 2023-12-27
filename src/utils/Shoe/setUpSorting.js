

module.exports = (conditions) => {

    const {
        sort_name,
        sort_price,
        sort_stock,
    } = conditions
    
    let order = []

    const addOrder = (field, direction) => {
        const directions = ["ASC", "DESC"]
        if (directions.includes(direction)) {
            order.push([field, direction]);
        }
    }
    if(! sort_name || sort_price || sort_stock){
        addOrder("name", 'ASC');
    } else {
    addOrder("name", sort_name?.trim().toUpperCase());
    addOrder("price", sort_price?.trim().toUpperCase());
    addOrder("stock", sort_stock?.trim().toUpperCase());
    }
    return order
}