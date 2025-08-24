import { Button, Text, View } from "react-native";

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Welcome to the home screen!</Text>
      <Button onPress={()=>navigation.navigate("User")} title="Go to User">
        Go to User
      </Button>
      <Button onPress={()=>navigation.navigate("Profile")} title="Go to Profile">
        Go to Profile
      </Button>
    </View>
  );
};

export default Home;
