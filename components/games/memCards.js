import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions
} from "react-native";
import Card from "./card";

const windowWidth = Dimensions.get("window").width;


function MemCards({ navigation }) {

  const [data, setData] = useState([
    {title: "First Item", id: '1', hide: '1'},
    {title: "Second Item", id: '2', hide: '1'},
    {title: "Third Item", id: '3', hide: '1'},
    {title: "First Item", id: '4', hide: '1'},
    {title: "Second Item", id: '5', hide: '1'},
    {title: "Third Item", id: '6', hide: '1'},
    {title: "First Item", id: '7', hide: '1'},
    {title: "Second Item", id: '8', hide: '1'},
    {title: "Third Item", id: '9', hide: '1'},
    {title: "First Item", id: '10', hide: '1'},
    {title: "Second Item", id: '11', hide: '1'},
    {title: "First Item", id: '12', hide: '1'},
    {title: "Second Item", id: '13', hide: '1'},
    {title: "Third Item", id: '14', hide: '1'},
    {title: "First Item", id: '15', hide: '1'},
    {title: "Second Item", id: '16', hide: '1'},
  ]);

  function touchCard(id) {
    const ind = data.indexOf(data.filter(item => item.id === id)[0]);
    if(data[ind].hide === '0'){
      let tmvar = data[ind];
      tmvar.hide = '1';
      setData([...data.slice(0, ind), tmvar ,...data.slice(ind + 1)]);
    } else {
      let tmvar = data[ind];
      tmvar.hide = '0';
      setData([...data.slice(0, ind), tmvar ,...data.slice(ind + 1)]);
    }
  }
  

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Button
          title="Back"
          style={style.headerBtn}
          onPress={() => navigation.navigate("Games")}
        />
        <Text>Game</Text>
        <Button title="New game" style={style.headerBtn} />
      </View>
      <View style={style.info}>
        <Text>Time</Text>
        <Text>Steps</Text>
        <Text>Score</Text>
      </View>
      <View style={style.desk}>
        <View style={style.cardsdesk}>
          <View style={style.cardsContainer}>
            {data.map((item) => {
              return <Card hide={item.hide} key={item.id} id={item.id} touchCard={touchCard} />;
            })}
          </View>
        </View>
      </View>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: '10%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "yellow",
  },
  headerBtn: {
    color: "black",
    backgroundColor: "grey",
    border: "1px solid black",
    fontSize: "10px",
  },
  info: {
    width: "100%",
    height: "12%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "green",
  },
  footer: {
    width: "100%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "3% 0%",
    backgroundColor: "red",
  },
  desk: {
    width: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexGrow: "1",
  },
  cardsdesk: {
    width: windowWidth,
    height: windowWidth,
    backgroundColor: "blue",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: "2%",
  },
  cardsContainer: {
    width: windowWidth * 0.96,
    height: windowWidth * 0.96,
    display: "flex",
    flexWrap: "wrap",
    alignItems:'center',
    justifyContent: 'space-between'
  },
  card: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.22,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "4px",
    backgroundColor: '#2e3d49',
    marginRight: '2%'
  },
});

export default MemCards;
