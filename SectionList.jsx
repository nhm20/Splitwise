import { SectionList, StatusBar, Text, View } from "react-native";

const SectionListExample = () => {
  const DATA = [
    {
      id: "1",
      category: "Electronics",
      data: ["Smartphone", "Tablet", "Smartwatch"],
    },
    {
      id: "2",
      category: "Home Appliances",
      data: ["Refrigerator", "Washing Machine", "Microwave"],
    },
    {
      id: "3",
      category: "Fashion",
      data: ["T-Shirt", "Jeans", "Jacket"],
    },
    {
      id: "4",
      category: "Books",
      data: ["Fiction", "Non-Fiction", "Science Fiction"],
    },
  ];
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight + 4,
        justifyContent: "center",
      }}
    >
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={{ padding: 20 }}>{item}</Text>}
        renderSectionHeader={(iter) => (
          <Text style={{ fontWeight: "bold", fontSize: 18, padding: 10 }}>
            {iter.section.category}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionListExample;
