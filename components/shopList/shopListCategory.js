import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

function ShopListCategory({ category }) {
  

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{category}</Text>
        
      </View>
    )
}

export default ShopListCategory;
