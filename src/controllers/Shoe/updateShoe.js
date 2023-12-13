const { Shoe, ShoeCategory, ShoeShoeCategory } = require("../../db");

const updateShoe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const shoe = await Shoe.findByPk(id);

    if (!shoe) return res.status(404).json({ error: "Zapato no encontrado" });

    await shoe.update({ ...data });

    if (data.category.length) {
      let newCategory = [];
      for (item in data.category) {
        const [itemDB, itemCreated] = await ShoeCategory.findOrCreate({
          where: { category: data.category[item] },
          defaults: {
            category: data.category,
            description: data.category[item],
          },
        });
        newCategory.push(itemDB);
      }

      await ShoeShoeCategory.destroy({
        where: {
            ShoeId: id
        },
      });

      await shoe.addShoeCategory(newCategory)
    }
    

    return res.status(200).json(shoe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateShoe;
