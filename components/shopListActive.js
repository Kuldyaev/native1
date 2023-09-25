import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

function ShopListActive({ list }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shopList.categories);

  const [categoriesBase, setCategoriesBase ]= useState([]);

  useEffect(() => {
    const newCatsBase = [];
    if (categories.length > 0) {
      categories.forEach((element) => {
        newCatsBase[element] = {
          catname: element,
          hide: false,
          items: [],
        };
      });
      
      list.forEach((item) => {
        newCatsBase[item.category_name].items.push(item);
      });
      setCategoriesBase(newCatsBase);
      console.log(newCatsBase);
    }
  },[categories]);

  useEffect(()=>{
    console.log(categoriesBase);
  }, [categoriesBase])
      

  if (categories.length > 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Active</Text>
        <FlatList data={categories} renderItem={({item})=>(<Text>{item}</Text>)} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Active</Text>
        <Text>empty</Text>
      </View>
    );
  }
}

export default ShopListActive;
