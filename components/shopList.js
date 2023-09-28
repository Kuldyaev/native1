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
import {
  switchShopingListAllCategoruesShowed
} from "./../reducers/status";

import ShopListActive from "./shopList/shopListActive";

const windowWidth = Dimensions.get("window").width;

function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);
  const allListsShowed = useSelector((state) => state.status.shopingListAllCategoruesShowed);
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

 const xxxxx = () => {
  dispatch(switchShopingListAllCategoruesShowed());
 }

  if (list.length > 0) {
    shopList = <ShopListActive list={list} style={style.container} mainSwitch={allListsShowed} />;
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
        <Text>{ allListsShowed ?'yes' :'no'}</Text>
        <Text>TOP</Text>
        <Pressable 
        style={{ width: 22, height: 22 , borderColor: "grey", borderStyle: "solid", borderWidth: 1}}
        onPress={xxxxx}
        >
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: 2,
    paddingTop: 2,
  }
});

export default ShopList;
