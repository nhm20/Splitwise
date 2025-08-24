import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";

const AddNewProducts = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const handleAddProduct = () => {
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        label="Name"
        style={styles.input}
      />
      <TextInput
        placeholder="Product Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Product Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
    <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default AddNewProducts;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
});
