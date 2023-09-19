import { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Alert,
  Modal,
  Pressable,
  Image,
  
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesome } from "@expo/vector-icons"; // use FontAwesome from the expo vector icons
import MarqueeText from 'react-native-marquee';   // бегущая строка

import Card from "./card";

const windowWidth = Dimensions.get("window").width;

function MemCards({ navigation }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [prevCardKey, setPrevCardKey] = useState(null);
  const [matchCards, setMatchCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const [type, setType] = useState("");
  const [starttime, setStarttime] = useState(0);
  const [clocktimer, setClocktimer] = useState([]);
  const [time, setTime] = useState(0);
  const [gamerun, setGamerun] = useState(false);
  const [startModalVisible, setStartModalVisible] = useState(false);
  const [finalModalVisible, setFinalModalVisible] = useState(false);
  const flagsBase = useSelector((state) => state.flags);
  const iconsbase = useSelector((state) => state.icons);
  const petsbase = useSelector((state) => state.pets);

 // const animatedLine = useRef(new Animated.Value(200)).current
  
  let CardSource = FontAwesome; // set FontAwesome as the default icon source
  let sizeIcon = 30;

  useEffect(() => {
    setStartModalVisible(true);
  //  startAnimate();
  }, []);

  useEffect(() => {}, [type]);

  useEffect(() => {
    if (gamerun) {
      const xxx = setInterval(() => {
        setTime(performance.now() - starttime);
      }, 990);
      setClocktimer([...clocktimer, xxx]);
    } else {
      clocktimer.forEach(() => {
        clearInterval(clocktimer.shift());
      });
    }
  }, [gamerun]);
/*
  const startAnimate = () => {
    Animated.timing(animatedLine, { toValue: -1100, useNativeDriver: true,  duration: 35000 }).start()
}
*/

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

  function checkHideAndShow() {
    let checkData = [];
    data.forEach((card) => {
      if (matchCards.includes(card.id)) {
        card.hide = "0";
        checkData.push(card);
      } else {
        card.hide = "1";
        checkData.push(card);
      }
    });
    setData(checkData);
  }

  function touchCard(key) {
    if (!gamerun) {
      setGamerun(true);
      setStarttime(performance.now());
    }
    const ind = data.indexOf(data.filter((item) => item.key === key)[0]);

    if (data[ind].hide === "1") {
      setData([
        ...data.slice(0, ind),
        { ...data[ind], hide: "0" },
        ...data.slice(ind + 1),
      ]);
    }

    if (prevCardKey === null) {
      setPrevCardKey(ind);
      setSteps(steps + 1);
    } else {
      if (data[prevCardKey].id === data[ind].id) {
        if (matchCards.length === 7) {

            /////**************************************/////


          setGamerun(false);
          setFinalModalVisible(true);
        }
        setMatchCards([...matchCards, data[ind].id]);
        setPrevCardKey(null);
      } else {
        setTimeout(() => {
          setData([
            ...data.slice(0, ind),
            { ...data[ind], hide: "1" },
            ...data.slice(ind + 1),
          ]);
          setData([
            ...data.slice(0, prevCardKey),
            { ...data[prevCardKey], hide: "1" },
            ...data.slice(prevCardKey + 1),
          ]);
          checkHideAndShow();
        }, 159);
        setPrevCardKey(null);
      }
    }
  }

  function restartGame() {
    setPrevCardKey(null);
    setMatchCards([]);
    setSteps(0);
    setTime(0);
    setGamerun(false);
    startGame();
  }
  //Formated time value
  function msToTime(duration) {
    let s = parseInt((duration / 1000) % 60);
    let m = parseInt((duration / (1000 * 60)) % 60);
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return m + ":" + s;
  }
  // Choose type of cards
  function chooseTypeOfCards(type) {
    setType(type);
    let cardsBase = [];
    if (type === "icons") {
      cardsBase = iconsbase;
    } else if (type === "pets") {
      cardsBase = petsbase;
    } else {
      cardsBase = chooseCardsFromDeck(flagsBase, 8);
    }
    let clone = [];
    clone.push(...cardsBase);
    shuffle(clone);
    clone.push(...cardsBase);
    shuffle(clone);
    for (let i = 0; i < 16; i++) {
      clone[i] = { ...clone[i], key: i };
    }
    setData(clone);
    setStartModalVisible(!startModalVisible);
  }

  function startGame() {
    let cardsBase = [];
    if (type === "icons") {
      cardsBase = iconsbase;
    } else if (type === "pets") {
      cardsBase = petsbase;
    } else {
      cardsBase = chooseCardsFromDeck(flagsBase, 8);
    }
    let clone = [];
    clone.push(...cardsBase);
    shuffle(clone);
    clone.push(...cardsBase);
    shuffle(clone);
    for (let i = 0; i < 16; i++) {
      clone[i] = { ...clone[i], key: i };
    }
    setData(clone);
  }

 // const counter = useSelector((state) => state.counter.value);

 /* useEffect(() => {
    dispatch(increment());
  }, []);  */

  return (
    <SafeAreaView style={style.container}>

      <View style={style.header}>
        <Button
          title="Back"
          style={style.headerBtn}
          onPress={() => {
            clocktimer.forEach(() => {
              clearInterval(clocktimer.shift());
            });
            setGamerun(false);
            navigation.navigate("Games");
          }}
        />
        <Text>Snake</Text>
        <Button
          title="New game"
          style={style.headerBtn}
          onPress={restartGame}
        />
      </View>
      <View style={style.info}>
        <Text style={style.infoText}>Time: {msToTime(time)}</Text>
        <Text style={style.infoText}>Steps: {steps}</Text>
        <Text style={style.infoText}>Score:  </Text>
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
    backgroundColor: "silver",
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
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "#2e3d49",
  },
  infoText: {
    color: "silver",
  },
  footer: {
    width: "100%",
    maxHeight: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1%",
    backgroundColor: "#2e3d49",
    flex: 1,
  },
  footerText: {
   color: "grey",
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalBlock: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "3%",
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  modalSymbolsBlock: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "3%",
    marginTop: "3%",
  },
  modalFlag: {
    width: 30,
    height: 20,
    marginLeft: 7,
  },
  modalPet: {
    width: 30,
    height: 30,
    marginLeft: 7,
    borderColor: "grey",
  },
});

export default MemCards;
