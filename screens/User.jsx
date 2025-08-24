import { Text, View } from "react-native";
import { Button } from "react-native-web";

const User = ({navigation}) => {
  return (
    <View>
      <Text>User Screen</Text>
      <Button onPress={()=>navigation.goBack()} title="Go Back">
        Go to Home
      </Button>
      <Button onPress={()=>navigation.push("Profile")} title="Go to Profile">
        Go to Profile
      </Button>
      <Button onPress={()=>navigation.popToTop()} >
        Replace with Profile
      </Button>
    </View>
  );
};

export default User;
