/**
 * Function to validate a date in the format YYYY-MM-DD
 */
const validateSimpleDate = (dateString) => /^\d{4}-\d{2}-\d{2}$/.test(dateString);

module.exports = { validateSimpleDate }