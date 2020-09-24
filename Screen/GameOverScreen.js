import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

let val = (
    <View></View>
)

const GameOverScreen = props => {
    return(
        <View style = {style.Screen}>
            <Text style = {style.out}>Number To Be Guess  : {props.userGuess} </Text>
            <View style = {style.go}>
                <Text style = {style.text}> The Game is Over! </Text>
                <View style = {style.buttonAlignment}>
                    <Button title = "New Game" color = "#F09B08" style = {style.button} onPress = {props.Reset}/>
                </View>
            </View>
            <Text style= {style.out}> Number of Rounds To Guess The Number : {props.rounds} </Text>
        </View>
    )

};

const style = StyleSheet.create({

    Screen: {
        flex:1,
        justifyContent:'center',
    },
    text:{
        fontSize: 35,
        margin:10,
        paddingBottom:10,
        fontFamily :'Dancing-Bold'
    },
    go:{
        
        borderWidth: 5,
        borderRadius :10,
        margin: 10,
        paddingTop: 50,
        backgroundColor: "#08E0F0",
        width: "95%",

    },
    buttonAlignment: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 50,
        marginBottom : 30,
       
    },
    out: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        textAlign : "center",
        margin : 70,
        borderBottomWidth:3,
        fontFamily : 'Italian'

    }

})

export default GameOverScreen;