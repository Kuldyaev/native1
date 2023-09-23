import { View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { reciveShopListFromAPI } from "./../reducers/shoppingList";




function ShopList({}) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.shopList.allItems);


  useEffect(() => {
    dispatch(reciveShopListFromAPI());
    console.log(list);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="ShopList" onPress={() => {
        dispatch(reciveShopListFromAPI());
        console.log(list);
      }}/>
    </View>
  );
}

export default ShopList;
