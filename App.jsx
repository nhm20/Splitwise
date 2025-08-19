import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-web";


export default function App() {
  const [text,setText]=useState("")
  return (
    <View>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text >{text}</Text>
      <TextInput value={text} onChangeText={(e)=>setText(e)}/>
    </View>
  );
}
