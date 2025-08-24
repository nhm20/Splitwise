import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.jsx";
import Profile from "../screens/Profile.jsx";
import User from "../screens/User.jsx";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🏠</Text>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>👤</Text>
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>⚙️</Text>
          ),
        }}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
};
export default Navigation;
