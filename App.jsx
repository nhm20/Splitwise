import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import User from "./screens/User";
import { NavigationContainer } from "@react-navigation/native";
import CounterProvider from "./context/CounterProvider";
import { ThemeProvider } from "./context/ThemeProvider";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerLeft: () => <DrawerToggleButton />,
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="User" component={User} />
        </Drawer.Navigator>
      </NavigationContainer>
      </CounterProvider>
      </ThemeProvider>
  );
}
