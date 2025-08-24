import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";

const ProductScreen = () => {
  const products = useSelector(state => state.products.products)
  console.log(products);
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem {...item.item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductScreen;
