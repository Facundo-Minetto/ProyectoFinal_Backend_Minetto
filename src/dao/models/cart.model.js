import mongoose from "mongoose";

const cartCollection = "carts"; //nombre de la colección

// Modelo de Schema
const cartSchema = new mongoose.Schema({
    products: {
        type: [ { product: {type: mongoose.Schema.Types.ObjectId, ref: "products" }, quantity: Number } ],  //sintaxis de mongoose
        default: []   //sintaxis de mongoose
    }
});

cartSchema.pre("findOne", function() {
    this.populate("products.product")
})
// Exportamos el modelo que vamos a utilizar 
export const cartModel = mongoose.model(cartCollection, cartSchema);
 