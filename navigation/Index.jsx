import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.jsx";
import Profile from "../screens/Profile.jsx";
import User from "../screens/User.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigatorContainer />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigatorContainer = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true, headerBackground: "#f4511e",
      headerTitle:"My App"
    }} initialRouteName="Home">
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen options={{ headerBackVisible: false }} name="Profile" component={Profile} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};
export default Navigation;
