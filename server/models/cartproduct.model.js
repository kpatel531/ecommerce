import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product'
    },
    quntity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const CartProductModel = mongoose.model('cartProduct', cartProduct)

export default CartProductModel