import React,{useState} from 'react' ;
import {View , StyleSheet, Image , Text, TextInput , TouchableWithoutFeedback,Keyboard, Alert, Button} from 'react-native';
import Card from '../Component/Card';
import ButtonCom from '../Component/ButtonComponents';
import OutNumber from '../Component/OutputNumber';


const StartGameScreen = props =>
{
    const [EnteredValue,SetEnteredValue] = useState('');
    const [confirmed , setConfirmed] = useState(false);
    const [selectNumber , setSelectNumber] = useState();

    const numberInputHandler = inputText =>
    {
        SetEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler = () =>
    {
        SetEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    }

    const confirmInputHandler = () =>
    {
        if(EnteredValue === '')
            Alert.alert('Invalid Input','Not A Number',[{ text: 'OK' , onPress: resetInputHandler , style: 'destructive'}]);
        else if(EnteredValue > 100 )
                Alert.alert('Wrong Guess','Number you Guess is Greater',[{ text: 'OK' , onPress: resetInputHandler , style: 'destructive'}]);
            else if(EnteredValue < 0)
                Alert.alert('Wrong Guess','Number you Guess is Smaller',[{ text: 'OK' , onPress: resetInputHandler , style: 'destructive'}]);

        setConfirmed(true);
        setSelectNumber(parseInt(EnteredValue));
        SetEnteredValue('');
        Keyboard.dismiss();
    }
    let numberScreen = (<View style={style.imageContainer}><Image source={require('../assets/Images/3d-pair-of-dice-marked-with-question-drawing__k22113192.jpg')} style = {style.image}/></View>);
    if(confirmed)
    {
           
        numberScreen = (
            <View style = {style.output}>
                <Card>
                    <Text style = {style.text}> Selected Number </Text>
                    <OutNumber  Number={selectNumber} /> 
                    <Button title="Start Game " onPress = {() => props.onStartGame(selectNumber)} />
                </Card>
            </View>
        );
    }
    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.screen}>
            <Text style = {style.intro}>Start A New Game!</Text>
             <Card style={style.textInput}>
                <Text style = {style.text}> Select a Number </Text>
                <TextInput style = {style.title} placeholder = "1,2,3,....." keyboardType = 'number-pad' onChangeText = {numberInputHandler} value = {EnteredValue} />
                <ButtonCom reset = {resetInputHandler} confirm = {confirmInputHandler} />
            </Card> 
            
            {numberScreen}
        </View>
        </TouchableWithoutFeedback>
    );
};

const style = StyleSheet.create({

    screen: {
        flex : 1,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'flex-start'
    },

    intro: {
        fontSize : 21,
        fontFamily : 'Dancing'
    },

    title: {
        borderBottomWidth : 1,
        width: 70,
        marginBottom: 20,
        padding : 10,
        textAlign: 'center'

    },

    textInput: {
        width: 300,
        alignItems : 'center',

    },

    text: {
        fontSize : 18,
        marginBottom : 10,
        fontFamily : 'Ceviche'
    },
    
    Output: {
        borderBottomWidth : 2
    },
    output: {
        padding : 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    image :{
        width:300,
        height:300
    },
    imageContainer:{
        
        width:300,
        height:300,     
        borderRadius : 200,
        borderWidth : 5,
        overflow : 'hidden',
        marginTop : 20

    }



});

export default StartGameScreen;