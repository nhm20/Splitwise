import { Pressable, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        color="blue"
        onPress={() => alert("Button pressed!")}
        title="Hit me"
      />
      <Pressable
        android_ripple={{ color: "red"}}
        onPress={() => alert("Pressable pressed!")}
        style={styles.pressable}
      >
        <Text style={styles.text}>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    padding: 10,
    backgroundColor: "lightblue",
    width: 200,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});

// Button does not support style prop
