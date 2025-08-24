import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./screens/products/ProductScreen";
import ProductItemScreen from "./screens/products/ProductItemScreen";
import AddNewProducts from "./screens/products/AddNewProducts";
import ProfileScreen from "./screens/profile/ProfileScreen";
import MenuScreen from "./screens/menu/MenuScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Product Items" component={ProductItemScreen} />
    </Stack.Navigator>
  );
};

const AddProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Products" component={AddNewProducts} />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ tabBarLabel: "Home" }}
          name="Home"
          component={HomeStackNavigator}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Add Products" }}
          name="Add Products"
          component={AddProductNavigator}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Profile" }}
          name="Profile"
          component={ProfileNavigator}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Menu" }}
          name="Menu"
          component={MenuStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
