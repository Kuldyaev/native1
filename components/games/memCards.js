import { StyleSheet, Button, SafeAreaView, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

function MemCards({ navigation }) {
   
  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <Button title="Back" style={style.headerBtn} onPress={() => navigation.navigate("Games")}/>
            <Text>Game</Text>
            <Button title="New game" style={style.headerBtn} />
        </View>
        <View style={style.info}>
            <Text>Time</Text>
            <Text>Steps</Text>
            <Text>Score</Text>
        </View>
        <View style={style.desk}>
            <View style={style.cardsdesk}>
                <Text>frio</Text>
            </View>
        </View>
        <View style={style.footer}>
            <Text>Footer</Text>
        </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width:'100%',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3%',
        backgroundColor: 'yellow'
    },
    headerBtn: {
        color: 'black',
        backgroundColor: 'grey',
        border: '1px solid black',
        fontSize: '10px'
    },
    info: {
        width:'100%',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3%',
        backgroundColor: 'green'
    },
    footer: {
        width:'100%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3% 0',
        backgroundColor: 'red'
    },
    desk:{
        width:'100%',
        display: 'flex',
        alignContent:'center',
        justifyContent: 'center',
        flexGrow: '1'
    },
    cardsdesk:{
        width: windowWidth,
        height: windowWidth,
        backgroundColor: 'blue'
    }

});

export default MemCards;
