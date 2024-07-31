import { View, Text, FlatList, Pressable } from "react-native";

import useCart from "../../Hooks/useCart"

import ProductCartCard from "../../components/ProductCartCard";

const Cart = () => {

  const { productsAdded, totalItems, finalPay, clearCart } = useCart();

  const handlePress = () => {
    clearCart();
  }

  return (
    <>
      {
        !productsAdded.length && <Text>Your cart is empty</Text>
      }
      {
        productsAdded && (
          <>
            <FlatList
              data={productsAdded}
              renderItem={({ item, index }) => <View><ProductCartCard key={index} product={item} /></View>}
              keyExtractor={item => item._id}
            />
            <View>
              <Text>Total Items: {totalItems}</Text>
              <Text>Final Pay: {finalPay}</Text>
              <Pressable
                onPress={() => handlePress()}
              >
                <Text>Clean Cart</Text>
              </Pressable>
            </View>
          </>
        )
      }
    </>
  );
}

export default Cart;
