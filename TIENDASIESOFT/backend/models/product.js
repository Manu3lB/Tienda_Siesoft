import mongoose from "mongoose";

//En esta parte controlamos lo que va ingresar a nuetra de base de datos no relacional
const productSchema = new mongoose.Schema({
    name: String,
    price: Number, 
    stock: Number,
    registerDate: { type: Date, default: Date.now},
    dbStatus: Boolean,
});

const product = mongoose.model("products", productSchema);

export default product;