import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { FC, useEffect, useState } from "react";
import axiosClient from "../axios/axios";
import { useLocalSearchParams } from "expo-router";

interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    images: string[];
    countInStock: number;
    amount: number;
    description: string;
}

const ProductCard: FC = () => {
    const [prod, setProd] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { _id } = useLocalSearchParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosClient.get(`${_id}`);
                setProd(response.data.product[0]);
            } catch (error) {
                setError("Failed to load product data");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [_id]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            {
                !prod ? (
                    <Text>No product found</Text>
                ) : (
                    <View style={styles.container}>
                        <Image
                            source={{ uri: prod.images[0] }}
                            style={styles.image}
                            accessibilityLabel={prod.name}
                        />
                        <Text style={styles.name}>{prod.name}</Text>
                        <Text style={styles.price}>${prod.price}</Text>
                        <Text style={styles.stock}>{prod.countInStock} left in stock</Text>
                        <Text>{prod.description}</Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
    stock: {
        fontSize: 16,
        color: 'green',
    },
});

export default ProductCard;
