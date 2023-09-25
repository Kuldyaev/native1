import { View, ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ShopListCategory from "./shopListCategory";

function ShopListActive({ list }) {
  const categories = useSelector((state) => state.shopList.categories);

  if (categories.length > 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <ShopListCategory category={item} />}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

export default ShopListActive;
