import express from 'express';

import { getProducts, getProductById, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getProducts(req, res);
});

router.get('/:id', (req, res) => {
    getProductById(req, res);
});

router.post('/', (req, res) => {
    createProduct(req, res);
});

export default router;
