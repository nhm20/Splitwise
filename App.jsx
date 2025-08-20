import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"blue"}
        animated={true}
        hidden={!visible}
        barStyle="dark-content"
      />
      <Button title="Toggle StatusBar" onPress={() => setVisible(!visible)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 6,
  },
});
