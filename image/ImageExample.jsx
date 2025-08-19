import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import favicon from "../assets/favicon.png";
const ImageExample = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
        }}
        loadingIndicatorSource={favicon}
        resizeMode="center"
      />

      <Image
        style={styles.image}
        source={favicon}
      />
    </View>
  );
};

export default ImageExample;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: "blue",
    },
})