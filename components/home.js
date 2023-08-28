import { Text, View, Button } from "react-native";

function MyApp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button
        title="ShoppingList"
        onPress={() => navigation.navigate("ShopList")}
      />
      <Button title="Games" onPress={() => navigation.navigate("Games")} />
    </View>
  );
}

export default MyApp;
