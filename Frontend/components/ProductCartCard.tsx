import { View, Text, Image } from "react-native";

import { Product } from "../app/(tabs)/index";

const ProductCartCard = ({ product }: { product: Product }) => {

  return (
    <View>
      <Image source={{ uri: product.image }} />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.amount}</Text>
    </View>
  );
};

export default ProductCartCard;
