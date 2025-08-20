import { FlatList, ScrollView, Text, View } from "react-native";
import ListItem from "./ListItem";

export default function App() {
  const products = [
    {id: 1, name: "Smartphone"},
    {id: 2, name: "Tablet"},
    {id: 3, name: "Smartwatch"},
    {id: 4, name: "Headphones"},
    {id: 5, name: "Wireless Charger"},
    {id: 6, name: "Bluetooth Speaker"},
    {id: 7, name: "Smart Glasses"},
    {id: 8, name: "Smart Ring"},
    {id: 9, name: "Fitness Tracker"},
    {id: 10, name: "AC"},
    {id: 11, name: "Refrigerator"},
    {id: 12, name: "Air Purifier"},
    {id: 13, name: "TV"},
    {id: 14, name: "Projector"},
    {id: 15, name: "Soundbar"},
    {id: 16, name: "Home Theater System"},
    {id: 17, name: "Gaming Console"}
  ]
  return (
    <View style={{width: "100%" }}>
      {/* <ScrollView>
        {products.map((product) => (
          <Text style={{ padding: 20, width: "100%" }} key={product.id}>
            {product.name}
          </Text>
        ))}
      </ScrollView> */}

      {/* <FlatList data={products}  renderItem={({ item }) =>
        <Text style={{ padding: 20, width: "100%" }} key={item.id}>
          {item.name}
        </Text>
      } /> */}
      {/* <FlatList data={products} keyExtractor={(item)=>item.id} renderItem={({ item }) =>
        <Text style={{ padding: 20, width: "100%" }} key={item.id}>
          {item.name}
        </Text>
      } /> */}
      <FlatList data={products} keyExtractor={(item)=>item.id} renderItem={({ item }) =>
        <ListItem item={item} />
      } />
    </View>
  );
}
