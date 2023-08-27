import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyApp from "./components/home";
import Games from "./components/games";
import ShopList from "./components/shopList"

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MyApp" component={MyApp} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="ShopList" component={ShopList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
