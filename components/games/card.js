import {
  Platform,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { FontAwesome, AntDesign, Entypo  } from "@expo/vector-icons"; // use FontAwesome from the expo vector icons

const windowWidth = Dimensions.get("window").width;

function Card({ hide, touchCard, id, flag, ind, name, type, color }) {
  let image, text;
  let CardSource = FontAwesome ; // set FontAwesome as the default icon source
  let icon_name = "question-circle";
  let icon_color = 'grey';
  let sizeIconforBack = windowWidth * 0.20;
  let sizeIcon = windowWidth * 0.15;

  if (hide === "1" ){
    CardSource = FontAwesome ;
  } else  if (flag ==='Entypo' & type === 'icons'){
    CardSource = Entypo;
  } else if (flag ==='AntDesign' & type === 'icons'){
    CardSource = AntDesign;
  } else {
    CardSource = FontAwesome ;
  }

  if (hide === "0") {
    image = 
      type === "flags" ? (
        <Image
        style={{
          width: "63%",
          height: "42%",
          resizeMode: "contain",
          marginLeft: "22%",
        }}
        source={{
          uri: flag,
        }}
      />
      ) : (
        <CardSource
          name={name}
          size={sizeIcon}
          color={color}
          style={style.imageCirlce}
        />
      );
    text = (
      type === "flags" ? (
      <Text
        style={{
          color: "black",
          marginLeft: "30%",
        }}
      >
        {name}
      </Text>
      ) : null
    );
  } else {
    image =
      type === "flags" ? (
        <Image
          style={style.image}
          source={require("../../assets/adaptive-icon.png")}
        />
      ) : (
        <CardSource
          name={icon_name}
          size={sizeIconforBack}
          color={icon_color}
          style={style.imageCirlce}
        />
      );
  }

  return (
    <Pressable
      style={hide === "0" ? (type === "flags" ? style.cardBack : style.cardBackCircle) : style.card}
      onPress={() => touchCard(ind)}
    >
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
    backgroundColor: "#2e3d49",
    marginRight: "2%",
  },
  cardBack: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.22,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "4px",
    backgroundColor: "rgb(2, 204, 186)",
    marginRight: "2%",
  },
  cardBackCircle: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.22,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    marginRight: "2%",
  },
  text: {
    width: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    paddingHorizontal: "40%",
  },
  image: {
    width: "96%",
    height: "96%",
  },
  imageCirlce: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    width: '100%',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
          marginLeft: '15%',
          marginTop: '15%',
      },
      android: {
        marginLeft: '15%',
        marginTop: '15%',
      },
  }),
  }
});

export default Card;
