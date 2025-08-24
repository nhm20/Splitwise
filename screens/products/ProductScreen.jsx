import { FlatList, RefreshControl, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { useEffect } from "react";

const ProductScreen = () => {
  const products = useSelector(state => state.products.products)
  console.log(products);

  const [refreshing, setRefreshing] = useState(false);

  const onRefreshList = () => {
    setRefreshing(true);
    dispatch(FETCH_PRODUCTS_THUNK()).finally(() => {
      setRefreshing(false);
    });
  };

  useEffect(() => {
    dispatch(FETCH_PRODUCTS_THUNK());
  }, [dispatch]);



  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem {...item.item} />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshList} />
        }
      />
    </View>
  );
};

export default ProductScreen;
