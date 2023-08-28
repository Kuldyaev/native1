import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

function Card ({title, size}) {
    return (
    <View style={style.card}>
      <Text >{title}</Text>
      <Text>{size}</Text>
    </View>
    );
};

const style = StyleSheet.create({

    card: {
       width: windowWidth*0.22,
       height: windowWidth*0.22,
       display: 'flex',
       alignContent:'center',
       justifyContent: 'center',
       border: '1px solid black',
       borderRadius: '4px'

    }
});

export default Card;
