import { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Alert
} from "react-native";

import Canvas from 'react-native-canvas';
import MarqueeText from 'react-native-marquee';   // бегущая строка



const windowWidth = Dimensions.get("window").width;

function Snake({ navigation }) {
/////**************************************/////
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        const ctx = ref.current.getContext('2d');
  
        if (ctx) {

          Alert.alert('Canvas is ready');
        }
      }
    }, [ref]);
  



    function restartGame() {
        Alert.alert('Restart game btn');
      }

 /////**************************************/////

  return (
    <SafeAreaView style={style.container}>

      <View style={style.header}>
        <Button
          title="Back"
          style={style.headerBtn}
          onPress={() => {
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
        <Text style={style.infoText}>Time: 100</Text>
        <Text style={style.infoText}>Steps: 5</Text>
        <Text style={style.infoText}>Score:  </Text>
      </View>
      <View style={style.desk}>
        <Canvas ref={ref} style={style.playDesk} />
      </View>    
      <View style={style.footer}>
        <MarqueeText
          style={style.footerText}
          speed={0.1}
          marqueeOnStart={true}
          loop={true}
          delay={4000}
          consecutive={true}
        >
          Control the snake using the arrow keys on the keyboard or touches on the touchscreen. The goal is to eat as many apples as possible. Avoid obstacles and the snake's own tail.
        </MarqueeText>
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
  playDesk: {
    width: windowWidth, 
    height: windowWidth,  
    backgroundColor: 'black',
  }
 
});

export default Snake;
