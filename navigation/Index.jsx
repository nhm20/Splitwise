import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.jsx";
import Profile from "../screens/Profile.jsx";
import User from "../screens/User.jsx";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavContainer />
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
const TabNavContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};
export default Navigation;
