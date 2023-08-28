import { StyleSheet, View, Text, Dimensions, Image, Pressable } from "react-native";

const windowWidth = Dimensions.get("window").width;



function Card({ hide, touchCard, id, flag}) {
  let image;
  if (hide === '0') {

    image = <Image
      style={{
        width: '96%',
        height: '63%',
        resizeMode: 'contain',
        marginLeft: '2%'
      }}
      source={{
        uri: flag,
      }}
    />;
  } else {
    image = (<Image style={style.image} source={require('../../assets/adaptive-icon.png')}/>);
  }


  return (
    <Pressable style={style.card} onPress={()=> touchCard(id) }>
      {image}
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
