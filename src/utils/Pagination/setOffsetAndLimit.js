

module.exports = (page, limit) => {
    if (!page) return {}
    
    page = parseInt(page)
    limit = parseInt(limit) || 10

    if (isNaN(page) || page <= 0)
        throw new Error("Page must be positive numbers.")

    if (isNaN(limit) || limit <= 0)
        throw new Error("Limit must be positive numbers.")

    return { offset: (page - 1) * limit, limit }
}