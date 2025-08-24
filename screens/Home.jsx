import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const counter = useContext(CounterContext);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Welcome to the home screen!</Text>
      <Text>Current Count: {counter.count}</Text>
      <Button title="Increment" onPress={counter.increment} />
      <Button title="Decrement" onPress={counter.decrement} />
      <Button title="Reset" onPress={counter.reset} />
    </View>
  );
};

export default Home;
