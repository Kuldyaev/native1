import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Switch,
} from "react-native";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

function ShopListCategory({ category, list }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const activeList = list.filter(
    (el) => (el.category_name === category) & el.is_active
  );

  const isShowing = activeList.length>0 ?{display: 'flex' } :{display: 'none'};
  
  true;
  return (
    <View style={[style.container, isShowing ]}>
      <View style={style.containerTop}>
        <Text>{category}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "silver" }}
          thumbColor={isEnabled ? "#111111" : "#ffffff"}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={ isEnabled ?{display: "flex"} :{display: "none"}}>
        <FlatList
          data={activeList}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    width: windowWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  containerTop: {
    backgroundColor: "grey",
    width: windowWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
export default ShopListCategory;
