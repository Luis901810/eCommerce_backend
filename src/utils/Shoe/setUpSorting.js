

module.exports = (conditions) => {

    const {
        sort_fname,
        sort_lname,
        sort_status,
        sort_systemRole,
        sort_enrollmentDate,
    } = conditions
    
    let order = []

    const addOrder = (field, direction) => {
        const directions = ["ASC", "DESC"]
        if (directions.includes(direction)) {
            order.push([field, direction]);
        }
    }

    addOrder("firstName", sort_fname?.trim().toUpperCase());
    addOrder("lastName", sort_lname?.trim().toUpperCase());
    addOrder("status", sort_status?.trim().toUpperCase());
    addOrder("systemRole", sort_systemRole?.trim().toUpperCase());
    addOrder("enrollmentDate", sort_enrollmentDate?.trim().toUpperCase());

    return order
}