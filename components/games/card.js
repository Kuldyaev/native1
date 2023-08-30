import { StyleSheet, View, Text, Dimensions, Image, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // use FontAwesome from the expo vector icons

const windowWidth = Dimensions.get("window").width;



function Card({ hide, touchCard, id, flag, ind, name}) {
  let image, text;

  if (hide === '0') {
    image = <Image
      style={{
        width: '63%',
        height: '42%',
        resizeMode: 'contain',
        marginLeft: '21%'
      }}
      source={{
        uri: flag,
      }}
    />;
    text = <Text style={{
      color: 'black',
      marginLeft: '30%'
    }}>{name}</Text>
  } else {
    image = (<Image style={style.image} source={require('../../assets/adaptive-icon.png')}/>);
  }

  return (
    <Pressable style={ hide === '0' ? style.cardBack : style.card} onPress={()=> touchCard(ind) }>
      {image}
      {text}
    </Pressable>
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
  cardBack: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.22,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "4px",
    backgroundColor: 'rgb(2, 204, 186)',
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
  },
  image:{
    width: '96%',
    height: '96%'
  }
});

export default Card;
