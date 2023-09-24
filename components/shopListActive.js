import { View,  Text, } from "react-native";
import { useSelector, useDispatch } from "react-redux";





function ShopListActive({list}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shopList.categories);
  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text>Active</Text>

      <Text>{list.length}</Text>
      <Text>{categories[0]}</Text>
       
    </View>
  );
}

export default ShopListActive;
