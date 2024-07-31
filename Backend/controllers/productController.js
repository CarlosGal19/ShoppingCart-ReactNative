import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
    try {
        // Return images url as image (only first image)
        const products = await Product.find({}, { _id: 1, name: 1, price: 1, countInStock: 1, image: { $arrayElemAt: ["$images", 0] }, size: 1 });
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ message: "Product ID is required" });
        const product = await Product.find({ _id: id });
        if (!product) return res.status(404).json({ message: "Product not found" });
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, countInStock, images, size } = req.body;
        if([name, price, description, countInStock, images].includes(undefined)) return res.status(400).json({ message: "All fields are required" });
        const product = new Product({
            name,
            price,
            description,
            countInStock,
            images,
            size
        });
        await product.save();
        return res.status(200).json({message: 'Product created', product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { getProducts, getProductById, createProduct };
