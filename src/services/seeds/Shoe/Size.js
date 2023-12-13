const { ShoeSize } = require('../../../db')

const data = [
    {
      "size": "16",
      "description": "for infants"
    },
    {
      "size": "17",
      "description": "for infants"
    },
    {
      "size": "18",
      "description": "for infants"
    },
    {
      "size": "19",
      "description": "for infants"
    },
    {
      "size": "20",
      "description": "for infants"
    },
    {
      "size": "21",
      "description": "for infants"
    },
    {
      "size": "22",
      "description": "for toddlers"
    },
    {
      "size": "23",
      "description": "for toddlers"
    },
    {
      "size": "24",
      "description": "for toddlers"
    },
    {
      "size": "25",
      "description": "for toddlers"
    },
    {
      "size": "26",
      "description": "for toddlers"
    },
    {
      "size": "27",
      "description": "for toddlers"
    },
    {
      "size": "28",
      "description": "for toddlers"
    },
    {
      "size": "29",
      "description": "for toddlers"
    },
    {
      "size": "30",
      "description": "for toddlers"
    },
    {
      "size": "31",
      "description": "for kids"
    },
    {
      "size": "32",
      "description": "for kids"
    },
    {
      "size": "33",
      "description": "for kids"
    },
    {
      "size": "34",
      "description": "for kids"
    },
    {
      "size": "35",
      "description": "for kids"
    },
    {
      "size": "36",
      "description": "for kids"
    },
    {
      "size": "37",
      "description": "for kids"
    },
    {
      "size": "38",
      "description": "for kids"
    },
    {
      "size": "39",
      "description": "for adult"
    },
    {
      "size": "40",
      "description": "for adult"
    },
    {
      "size": "41",
      "description": "for adult"
    },
    {
      "size": "42",
      "description": "for adult"
    },
    {
      "size": "43",
      "description": "for adult"
    },
    {
      "size": "44",
      "description": "for adult"
    }
  ]

module.exports = async () => {
    const count = await ShoeSize.count()
    if (count === 0) {
        await ShoeSize.bulkCreate(data)
    }
}
