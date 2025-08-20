import { Text } from "react-native";

export default function ListItem({ item }) {
  return (
    <Text style={{ padding: 20, width: "100%" }} key={item.id}>
      {item.name}
    </Text>
  );
}
