import { View, Button } from "react-native";

function Games({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="MemoryCards"
        onPress={() => navigation.navigate("MemCards")}
      />
      <Button
        title="Snake"
        onPress={() => navigation.navigate("Snake")}
      />
    </View>
  );
}

export default Games;
