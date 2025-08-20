import {StatusBar, View } from "react-native";
import SectionListExample from "./SectionList";

export default function App() {
  return (
    <View style={{ width: "100%" }}>
      <StatusBar hidden barStyle="dark-content" />
      <SectionListExample />
    </View>
  );
}
