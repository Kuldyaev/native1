import { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Alert,
  TouchableWithoutFeedback
} from "react-native";

import Canvas, {Image as CanvasImage} from 'react-native-canvas';
import MarqueeText from 'react-native-marquee';   // бегущая строка

const windowWidth = Dimensions.get("window").width;
const brick = Math.floor(windowWidth/24);

function Snake({ navigation }) {
/////**************************************/////
    const ref = useRef("s");
    const [gamerun, setGamerun] = useState(false);
    const [starttime, setStarttime] = useState(0);
    const [clocktimer, setClocktimer] = useState([]);
    const [time, setTime] = useState(0);
    const [tick, setTick] = useState(0);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [snake, setSnake] = useState([{x: 11, y:11},{x: 12, y:11},{x: 13, y:11}]);
    const [food, setFood]   =  useState({
        x:  Math.floor(Math.random() * 6)+11,
        y:  Math.floor(Math.random() * 7)+1, 
    });
    const [direction, setDirection] = useState(0); // 0-влево, 1-вверх, 2-вправо, 3-вниз

    var eee = 0;

    useEffect(() => {
      if (ref.current) {
        const ctx = ref.current.getContext('2d');
        if (ctx) {
            ref.current.width =windowWidth;
            ref.current.height =windowWidth;
            ctx.fillStyle = 'darkgreen';
            ctx.fillRect(0, 0, windowWidth, windowWidth);
            ctx.fillStyle = 'green';
            ctx.fillRect(brick, brick,windowWidth-brick*2, windowWidth-brick*2);
            drawSnake(); 
            drawFood();
        } else {
            Alert.alert('problem with this game');
        }
      }
    }, );

    useEffect(() => {
        if (gamerun) {
          const xxx = setInterval(async () => {
            setTime(performance.now() - starttime);
          }, 990);
          const sss = setInterval(async () => {
            gameprocess();
          }, 100);
          setClocktimer([...clocktimer, xxx, sss]);
        } else {
            clearIntervals();
        }
    }, [gamerun]);

    useEffect(() => {
        if (tick === 1) {
            snackmove();
        }
    }, [tick]);

    function gameprocess(){ 
        eee++;
        setTick(0);
        if((eee + speed) >6 ){
            eee = 0;
            setTick(1);  
        }
    };

    function snackmove() {
        var newSnake = snake;
        var newHead = {};
            if(direction === 0){
                newHead.x =Number(snake[0].x-1);
                newHead.y = Number(snake[0].y); 
            } else if ( direction === 1 ){
                newHead.x =Number(snake[0].x);
                newHead.y = Number(snake[0].y-1);
            } else if ( direction === 2 ){
                newHead.x =Number(snake[0].x+1);
                newHead.y = Number(snake[0].y);
            }  else {
                newHead.x =Number(snake[0].x);
                newHead.y = Number(snake[0].y+1);
            }
        newSnake.unshift(newHead);

       if (newHead.x === food.x & newHead.y === food.y){
            setScore(score + 1);
            newFood();        
       } else {
        newSnake.pop();
       }
        setSnake(newSnake);
        drawSnake();
        drawFood();
    };

    function clearIntervals(){
        clocktimer.forEach(() => clearInterval(clocktimer.shift()));
    }

    function newFood() {
        var x = 0;
        var y = 0;
        do{
            x = Math.floor(Math.random() * 22)+1;
            y = Math.floor(Math.random() * 22)+1;
        } while (foodInSnake(x, y));      
        setFood({x:x, y:y});
    }

    function drawSnake() {
        const ctx = ref.current.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'black';
            for(let i=0; i<snake.length; i++){
                ctx.fillRect(brick*snake[i].x , brick*snake[i].y, brick, brick);
            }
        } else {
            Alert.alert('problem with this game Snake not draw');
        }
    };

    function drawFood(){
        const ctx = ref.current.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'red';
            ctx.fillRect(brick*food.x , brick*food.y, brick, brick);
        } else {
            Alert.alert('problem with this game Food not draw');
        }
    }
  
    function restartGame() {
        setGamerun(!gamerun);
    }

    function foodInSnake(x, y){
        var match = false;
        for (var i=0; i<snake.body; i++){
            if (snake[i].x===x & snake[i].y===y){
                match = true;
            }
        };
        return match
    }

    function touchDesk (evt) {
        if (gamerun) {
            if(evt.nativeEvent.locationY < windowWidth/2  & (direction===0 || direction===2)){
                setDirection(1);
            } else if (evt.nativeEvent.locationY >= windowWidth/2  & (direction===0 || direction===2)){
                setDirection(3);
            } else if (evt.nativeEvent.locationX >= windowWidth/2  & (direction===1 || direction===3)){
                setDirection(2);
            } else if (evt.nativeEvent.locationX < windowWidth/2  & (direction===1 || direction===3)){
                setDirection(0);
            }
        }
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
        <Text style={style.infoText}>Time: {time}</Text>
        <Text style={style.infoText}>Score: {score}</Text>
        <Text style={style.infoText}>Speed: {speed} </Text>
      </View>
      <TouchableWithoutFeedback onPress={(evt) => touchDesk(evt)}>
      <View  style={style.desk}>    
        <Canvas ref={ref} width={windowWidth}  height={windowWidth} style={style.playDesk}  />
        </View>
      </TouchableWithoutFeedback> 

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
    backgroundColor: 'black',
    width: windowWidth,
    height: windowWidth,

  }
 
});

export default Snake;
