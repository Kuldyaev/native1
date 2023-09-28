import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchShopListItems,
  loadShopListcategories,
} from "./../reducers/shoppingList";
import { switchShopingListAllCategoruesShowed } from "./../reducers/status";

import ShopListActive from "./shopList/shopListActive";

const windowWidth = Dimensions.get("window").width;

function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);
  const allListsShowed = useSelector(
    (state) => state.status.shopingListAllCategoruesShowed
  );
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

  const changeMainSwitch = () => {
    dispatch(switchShopingListAllCategoruesShowed());
  };

  if (list.length > 0) {
    shopList = (
      <ShopListActive
        list={list}
        style={style.container}
        mainSwitch={allListsShowed}
      />
    );
  } else {
    shopList = (
      <View>
        <Text>empty</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={[style.container, style.containerTop]}>
        <Text> </Text>
        <Text>TOP</Text>
        <Pressable style={style.pressable} onPress={changeMainSwitch}>
          <Image
            source={require("../assets/galka.png")}
            style={{
              width: 12,
              height: 12,
              transform: allListsShowed ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Pressable>
      </View>
      {shopList}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    width: windowWidth,
    //  display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "7%",
    paddingBottom: 2,
    paddingTop: 2,
  },
  pressable: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderColor: "grey",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default ShopList;
