import { StatusBar, View } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Navigator from "./Navigator";
import store from "./store/store";
import { Fragment, useCallback } from "react";
import { useFonts } from "expo-font";
import RobotoCondensed from "./assets/fonts/Roboto_Condensed-Light.tff";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded,fontError] = useFonts({
    'Roboto_Condensed': RobotoCondensed
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) return null;
  return (
    <Fragment>
      <StatusBar />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    </Fragment>
  );
}
