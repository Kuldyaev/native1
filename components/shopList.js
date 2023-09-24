import { View, Button, Text, } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchShopListItems } from "./../reducers/shoppingList";

import ShopListActive from "./shopListActive";




function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);
  let shopList;

  useEffect(() => {
    dispatch(fetchShopListItems());
  }, []);

  if(list.length>0){
    shopList = (< ShopListActive list={list} />)
  } else {
    shopList = (<View>
    <Text>empty</Text>
  </View>)
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
