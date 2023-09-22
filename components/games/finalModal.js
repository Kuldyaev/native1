import { View, Text, Pressable, Image, StyleSheet} from "react-native";
import { useDispatch } from "react-redux";
import { hideFinalModalVisibleMemoryGame } from "./../../reducers/status"

function FinalModal(props){

    const dispatch = useDispatch();

    return (
        <View style={style.centeredView}>
            <View style={style.modalView}>
                <View style={style.modalViewHeader}>
                    <Image style={style.modalPet} source={require("../../assets/finish.png")} />
                    <Text style={style.modalText}>FINAL</Text>
                    <Image style={style.modalPet} source={require("../../assets/finish.png")} />
                </View>
            <Pressable
                style={[style.button]}
                onPress={() => dispatch(hideFinalModalVisibleMemoryGame())}
            >
                <Text style={style.textStyle}>OK</Text>
                <Text style={style.textStyle}>{props.width}</Text>
            </Pressable>
            </View>
        </View>
    )
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
      modalViewHeader:{
        display: 'flex',
        flexDirection: 'row',
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
        color: 'white'
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
  });

export default FinalModal;