import { View, Text } from "react-native";

import useCart from "../../Hooks/useCart"

import { Product } from './index'

const Cart = () => {

  const { productsAdded } = useCart();

  return (
    <View>
      {
        !productsAdded.length && <Text>Your cart is empty</Text>
      }
      {
        productsAdded && productsAdded.map((product: Product) => (
          <View key={product._id}>
            <Text>{product.name}</Text>
            <Text>{product.amount}</Text>
            <Text>${product.price.toFixed(2)}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default Cart;
