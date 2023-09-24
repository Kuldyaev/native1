import { View,  Text, } from "react-native";
import {  useDispatch } from "react-redux";





function ShopListActive({list}) {
  const dispatch = useDispatch();

  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text>Active</Text>

      <Text>{list.length}</Text>
       
    </View>
  );
}

export default ShopListActive;
