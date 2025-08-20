import { useState } from "react";
import { Button, Modal, StatusBar, StyleSheet, Text, View } from "react-native";

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={open} animationType="slide">
        <View style={styles.modal}>
          <Text>Hello from Modal!</Text>
          <Button title="Close" onPress={() => setOpen(false)} />
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setOpen(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 6,
  },
  modal: {
    padding: 20,
    margin: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "black",
    elevation: 5,
    width: 500,
    height: 500,
  },
  button: {
    marginTop: 20,
  },
});
export default ModalExample;
