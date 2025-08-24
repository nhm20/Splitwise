import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { init } from "../../db/database";
const AddNewProducts = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddProduct = () => {};
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    init()
      .then((data) => {
        console.log("Database initialized");
      })
      .catch((err) => {
        console.error("Error initializing database:", err);
      });
  }, []);

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

      <Button icon="camera" onPress={pickImage}>
        {" "}
        Take image{" "}
      </Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}

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
