import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchShopListItems,
  loadShopListcategories,
} from "./../reducers/shoppingList";

import ShopListActive from "./shopList/shopListActive";

const windowWidth = Dimensions.get("window").width;

function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);
  let shopList;

  useEffect(() => {
    dispatch(fetchShopListItems());
  }, []);

  useEffect(() => {
    var cats = [];
    if (list.length > 0) {
      list.forEach((element) => {
        if (!cats.includes(element.category_name)) {
          cats.push(element.category_name);
        }
      });
    }
    dispatch(loadShopListcategories(cats));
  }, [list.length]);

  if (list.length > 0) {
    shopList = <ShopListActive list={list} style={style.container} />;
  } else {
    shopList = (
      <View>
        <Text>empty</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={[style.container, style.containerTop]}>
        <Text>TOP</Text>
        <Pressable style={{ width: 22, height: 22 , borderColor: "grey", borderStyle: "solid", borderWidth: 1}}>
          <Image
            source={require("../assets/galka.svg")}
            style={{ width: 20, height: 20 , }}
          />
        </Pressable>
      </View>
      {shopList}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: windowWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTop: {
    display: "flex",
    flexDirection: "row"
  }
});

export default ShopList;
