import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../reducers/counter";

import Card from "./card";

const windowWidth = Dimensions.get("window").width;

function MemCards({ navigation }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [prevCardKey, setPrevCardKey] = useState(null); 
  const [matchCards, setMatchCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const flagsBase = useSelector((state) => state.flags);
  let cardsBase = [];


 useEffect(() => {
    cardsBase = chooseCardsFromDeck(flagsBase, 8);
    let clone = [];
    clone.push( ...cardsBase );
    shuffle(clone);
    clone.push( ...cardsBase );
    shuffle(clone);
    for (let i=0; i<16; i++){
      clone[i] = {...clone[i], key: i};
    };
    setData(clone);
  }, []);

  function chooseCardsFromDeck(deck, quantity) {
    let newCards = Array.from(deck);
    while (newCards.length > quantity) {
      let randomCard = Math.floor(Math.random() * newCards.length);
      newCards.splice(randomCard, 1);
    }
    return newCards;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function checkHideAndShow (){
    let checkData = [];
    data.forEach((card)=>{
      if(matchCards.includes(card.id)){
        card.hide = '0';
        checkData.push(card)
      } else {
        card.hide = '1';
        checkData.push(card)
      }
    });
    setData(checkData);
  }

  function touchCard(key) {
    const ind = data.indexOf(data.filter((item) => item.key === key)[0]);

    if (data[ind].hide === "1") {
      setData([...data.slice(0, ind), { ...data[ind], hide: "0"}, ...data.slice(ind + 1)]); 
    } 

    if (prevCardKey === null) {
      setPrevCardKey(ind);
      setSteps(steps + 1);
    } else {
      if (data[prevCardKey].id === data[ind].id){
        setMatchCards([...matchCards, data[ind].id]);
        setPrevCardKey(null);
      } else {
        setTimeout(()=>  {
          setData([...data.slice(0, ind), { ...data[ind], hide: "1"}, ...data.slice(ind + 1)]);
          setData([...data.slice(0, prevCardKey), { ...data[prevCardKey], hide: "1"}, ...data.slice(prevCardKey + 1)]);
          checkHideAndShow();
        }, 159);
        setPrevCardKey(null);
      }
    };
  }

  const counter = useSelector((state) => state.counter.value);


  useEffect(() => {
    dispatch(increment());
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Button
          title="Back"
          style={style.headerBtn}
          onPress={() => navigation.navigate("Games")}
        />
        <Text>MemoryGame</Text>
        <Button title="New game" style={style.headerBtn} />
      </View>
      <View style={style.info}>
        <Text>Time</Text>
        <Text>Steps: {steps}</Text>
        <Text>Score</Text>
      </View>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={style.desk}
      >
        <LinearGradient
          style={style.cardsdesk}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
        >
          <View style={style.cardsContainer}>
            {data.map((item) => {
              return (
                <Card
                  hide={item.hide}
                  key={item.key}
                  id={item.id}
                  ind = {item.key}
                  flag={item.flag}
                  name={item.name}
                  touchCard={touchCard}
                />
              );
            })}
          </View>
        </LinearGradient>
      </LinearGradient>
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
    height: "10%",
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
    //backgroundColor: "#aa7ecd",
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.22,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "4px",
    backgroundColor: "#2e3d49",
    marginRight: "2%",
  },
});

export default MemCards;
