import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchShopListItems, loadShopListcategories } from "./../reducers/shoppingList";

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
    };
    dispatch(loadShopListcategories(cats));
  }, [list.length]);

  if (list.length > 0) {
    shopList = <ShopListActive list={list}  style={style.container} />;
  } else {
    shopList = (
      <View>
        <Text>empty</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={style.container}>
        <Text>TOP</Text>
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
});

export default ShopList;
