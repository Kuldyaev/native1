import { View, Button } from "react-native";

function Games({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="MemoryCards"
        onPress={() => navigation.navigate("MemCards")}
      />
    </View>
  );
}

export default Games;
