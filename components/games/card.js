import { StyleSheet, View, Text, Dimensions, TouchableHighlight } from "react-native";

const windowWidth = Dimensions.get("window").width;



function Card({ hide, touchCard, id}) {
  let text1;
  if (hide === '1') {
    text1 = (<Text style={style.text}>{hide}</Text>);
  } else {
    text1 = (<Text style={style.text}>{id}</Text>);
  }


  return (
    <TouchableHighlight style={style.card} onPress={()=> touchCard(id) }>
      {text1}
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
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
  text: {
    width: '100%',
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: '40%'
  }
});

export default Card;
