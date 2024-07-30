import { createContext, useState, useEffect } from "react";

const CartContext = createContext<any>(null);

interface CartProviderProps {
    children: React.ReactNode;
}

interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    countInStock: number;
    amount: number
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [productsAdded, setProductsAdded] = useState<Product[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [finalPay, setFinalPay] = useState<number>(0);

    const addCart = (product: Product) => {
        const productExist = productsAdded.find(p => p._id === product._id);
        if (productExist) {
            setProductsAdded(productsAdded.map(p => p._id === product._id ? { ...p, amount: p.amount + 1 } : p));
            setTotalItems(totalItems + 1);
            setFinalPay(finalPay + product.price * product.amount);
            return;
        }
        product.amount = 1;
        setTotalItems(totalItems + 1);
        setFinalPay(finalPay + product.price);
        setProductsAdded(prev => [...prev, product]);
        return;
    };

    const removeCart = (productId: string) => {
        setProductsAdded(productsAdded.filter(product => product._id !== productId));
    };

    const clearCart = () => {
        setProductsAdded([]);
    };

    return (
        <CartContext.Provider value={{ productsAdded, totalItems, finalPay, addCart, removeCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}

export { CartProvider, CartContext };
