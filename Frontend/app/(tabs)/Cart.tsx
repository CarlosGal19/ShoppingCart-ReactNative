import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import useCart from "../../Hooks/useCart";
import ProductCartCard from "../../components/ProductCartCard";

const Cart = () => {
  const { productsAdded, totalItems, finalPay, clearCart } = useCart();

  const handlePress = () => {
    clearCart();
  };

  return (
    <View style={styles.container}>
      {!productsAdded.length ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={productsAdded}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <ProductCartCard product={item} />
              </View>
            )}
            keyExtractor={(item) => item._id}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
            <Text style={styles.summaryText}>Final Pay: ${finalPay}</Text>
            <Pressable style={styles.cleanCartButton} onPress={handlePress}>
              <Text style={styles.cleanCartButtonText}>Clean Cart</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  productCard: {
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  summaryContainer: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  cleanCartButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ff5a5f",
    borderRadius: 5,
  },
  cleanCartButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
