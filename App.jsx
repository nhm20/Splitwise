import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Navigator from "./Navigator";
import store from "./store/store";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <StatusBar />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </Fragment>
  );
}
