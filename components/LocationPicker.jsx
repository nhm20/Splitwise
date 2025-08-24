import { View } from "react-native";
import * as Location from "expo-location";
import { Button } from "react-native-web";
import LocationPreview from "./LocationPreview";

const LocationPicker = async () => {
    const [location, setLocation] = useState({lat:null, long:null});
    const LocationPick = async () => {
      let permissions = await Location.requestForegroundPermissionsAsync();
      if (permissions.granted === false) {
        return null;
      }
        let location = await Location.getCurrentPositionAsync({
            timeInterval: 4000,
            accuracy: Location.Accuracy.High
      });
      setLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude
      });
    };
  return (
    <View>
          <Button title="Get Location" onPress={LocationPick} />
          <View>
            <LocationPreview location={location} />
          </View>
    </View>
  );
};
