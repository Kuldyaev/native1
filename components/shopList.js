import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchShopListItems, loadShopListcategories } from "./../reducers/shoppingList";

import ShopListActive from "./shopList/shopListActive";

function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);
  let shopList;

  useEffect(() => {
    dispatch(fetchShopListItems());
  }, []);

  useEffect(() => {
    var cats = [];
    console.log(list);
    if (list.length > 0) {
      list.forEach((element) => {
        if (!cats.includes(element.category_name)) {
          cats.push(element.category_name);
        }
      });
    };
    console.log(cats);
    dispatch(loadShopListcategories(cats));
  }, [list.length]);

  if (list.length > 0) {
    shopList = <ShopListActive list={list} />;
  } else {
    shopList = (
      <View>
        <Text>empty</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>TOP</Text>
      </View>
      {shopList}
    </View>
  );
}

export default ShopList;
