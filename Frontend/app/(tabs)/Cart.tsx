import { View, Text, FlatList } from "react-native";

import useCart from "../../Hooks/useCart"

import ProductCartCard from "../../components/ProductCartCard";

const Cart = () => {

  const { productsAdded, totalItems, finalPay } = useCart();

  return (
    <View>
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
            </View>
          </>
        )
      }
    </View>
  );
}

export default Cart;
