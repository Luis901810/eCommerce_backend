const { ID_PENDING, ID_APPROVED, ID_REJECTED } = require('./constants')

const commonStyles = `
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
`

const stylesByStatus = {
    [ID_PENDING]: `
        background-color: #ffcc00;
    `,
    [ID_APPROVED]: `
        background-color: #00cc00;
    `,
    [ID_REJECTED]: `
        background-color: #ff0000;
    `,
}

module.exports = {
    commonStyles,
    stylesByStatus,
}
