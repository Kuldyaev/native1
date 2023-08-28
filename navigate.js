import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyApp from "./components/home";
import Games from "./components/games";
import ShopList from "./components/shopList";
import MemCards from './components/games/memCards'

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MyApp" component={MyApp} options={{ headerShown: false }}/>
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="MemCards" component={MemCards} options={{ headerShown: false }}/>
        <Stack.Screen name="ShopList" component={ShopList} 
          options={{
            title: "Shopping List",
            headerStyle: {
              backgroundColor: "grey",
            },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
