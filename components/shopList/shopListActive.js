import { View, ActivityIndicator, FlatList, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ShopListCategory from "./shopListCategory";

const windowWidth = Dimensions.get("window").width;

function ShopListActive({ list }) {
  const categories = useSelector((state) => state.shopList.categories);

  if (categories.length > 0) {
    return (
      <View style={style.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <ShopListCategory category={item} list={list} />}
        />
      </View>
    );
  } else {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
      width: windowWidth,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
});

export default ShopListActive;
