import product from "../models/product.js";

const registerProduct = async (req, res) => {
    if(!req.body.name || !req.body.price || !req.body.stock)
    return res.status(400).send("Incomplete data");

    const existingProduct = await product.findOne({ name: req.body.name});
    if (existingProduct) return res.status(400).send("The product already exist");

    const productSchema = new product({
        name: req.body.name,
        price: req.body.price,
        registerDate: req.body.registerDate,
        stock: req.body.stock,
        dbStatus: true,
    });

    const result = await productSchema.save();
    if (!result) return res.status(400).send("Failed to register");

    return res.status(200).send({result});
};

export default {registerProduct};