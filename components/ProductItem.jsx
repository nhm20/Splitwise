import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";

const ProductItem = ({ name, image, price, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.price}>{price}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{description.slice(0, 20)}</Text>
      <View style={styles.buttonContainer}>
        <IconButton style={styles.plus} icon={"plus"} />
        <IconButton style={styles.plus} icon={"plus"} />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: MD3Colors.neutral95,
    width: Dimensions.get("window").width / 2 + 20,
    height: 400,
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    gap: 5,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  price: {
    fontWeight: "bold",
    marginLeft: "auto",
    padding: 10,
    marginBottom: "auto",
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginTop: "auto",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    plus: {
      backgroundColor: "transparent",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
    },
    minus: {
      backgroundColor: "transparent",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
    },
});
