import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { CounterContext } from "../context/CounterProvider";
import ThemeContext from "../context/ThemeProvider";

const Home = () => {
  const counter = useContext(CounterContext);
  const theme = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: theme.theme === "light" ? "#fff" : "#333", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Home Screen</Text>
      <Text>Welcome to the home screen!</Text>
      <Text>Current Theme: {theme.theme}</Text>
      <Button title="Toggle Theme" onPress={theme.toggleTheme} />

      <Text>Current Count: {counter.count}</Text>
      <Button title="Increment" onPress={counter.increment} />
      <Button title="Decrement" onPress={counter.decrement} />
      <Button title="Reset" onPress={counter.reset} />
    </View>
  );
};

export default Home;
