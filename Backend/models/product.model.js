import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
});

const Product = model("Products", productSchema);

export default Product;
