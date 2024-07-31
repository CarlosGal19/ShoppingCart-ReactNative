import { View, Text, Image, Pressable } from "react-native";

import { Product } from "../app/(tabs)/index";

import useCart from "../Hooks/useCart";

const ProductCartCard = ({ product }: { product: Product }) => {

  const { removeCart } = useCart();

  const handlePress = () => {
    removeCart(product._id);
  }

  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} ></Image>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.amount}</Text>
      <Pressable
        onPress={() => handlePress()}
      >
        <Text>Remove</Text>
      </Pressable>
    </View>
  );
};

export default ProductCartCard;
