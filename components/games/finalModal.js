import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import {
  hideFinalModalVisibleMemoryGame,
  hideFinalModalVisibleSnakeGame,
} from "./../../reducers/status";

function FinalModal(props) {
  const dispatch = useDispatch();

  function closeBtn() {
    if (props.game === "snake") {
      dispatch(hideFinalModalVisibleSnakeGame());
    } else if (props.game === "memory") {
      dispatch(hideFinalModalVisibleMemoryGame());
    }
  }

  return (
    <View style={style.centeredView}>
      <View style={style.modalView}>
        <View style={style.modalViewHeader}>
          <Image
            style={style.modalPet}
            source={require("../../assets/finish.png")}
          />
          <Text style={style.modalText}>FINISH</Text>
          <Image
            style={style.modalPet}
            source={require("../../assets/finish.png")}
          />
        </View>
        <View style={style.modalViewHeader}>
          <Text style={style.modalText}>Congratulations!</Text>
        </View>
        <View style={style.modalViewHeader}>
          <Text style={style.modalText}>Your results:</Text>
        </View>
        <View style={style.modalViewHeader}>
          <Text style={style.modalText}>{props.result1name}: {props.result1}</Text>
        </View>
        <View style={style.modalViewHeader}>
          <Text style={style.modalText}>{props.result2name}: {props.result2}</Text>
        </View>
        <Pressable style={[style.button]} onPress={() => closeBtn()}>
          <Text style={style.textStyle}>OK</Text>
          <Text style={style.textStyle}>{props.width}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
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
  modalViewHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
  },
  modalPet: {
    width: 30,
    height: 30,
    marginLeft: 7,
    borderColor: "grey",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    color: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FinalModal;
