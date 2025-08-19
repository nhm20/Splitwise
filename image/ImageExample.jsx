import React from "react";
import { Image, Text, View } from "react-native";
import favicon from "../assets/favicon.png";
const ImageExample = () => {
  return (
    <View>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
        }}
              loadingIndicatorSource={favicon}
              resizeMode="center"
      />

      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={favicon}
      />
    </View>
  );
};

export default ImageExample;
