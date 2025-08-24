
const LocationPreview = ({ location }) => {
  return (
    <View>
      <Text>
        Location: {location.lat}, {location.long}
      </Text>
    </View>
  );
};

export default LocationPreview;