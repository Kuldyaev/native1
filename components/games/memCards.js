import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
//import Card from "./card";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

function Card({ title }) {
  return (
    <View style={style.card}>
      <Text>{title}</Text>
    </View>
  );
}

function MemCards({ navigation }) {
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
            {DATA.map((item) => {
              return <Card title={item.title} />;
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
    height: "12%",
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
    padding: "3% 0",
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
    backgroundColor: "green",
  },
});

export default MemCards;
