import React ,{useState,useRef,useEffect} from 'react';
import {View , Text, Button,StyleSheet, Alert} from 'react-native';
import Outnumber from'../Component/OutputNumber';
import Card from '../Component/Card';


const generateRandomBetween = (max , min ,exclude) =>
{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rn = Math.floor(Math.random() * (max - min)) + min;


    if (rn === exclude)
    {
        return (generateRandomBetween(max , min , exclude));
    }
    else{
        return rn;
    }
}


const GameScreen = props =>
{
        const [currentGuess,setCurrentGuess] = useState( generateRandomBetween(1 , 100 , props.UserChoice) );
        const [rounds , setRounds] = useState(0);
        const [previous , setPrevious] = useState();
        const currentlow = useRef(1);
        const currenthigh = useRef(100);
        

        useEffect(() => {
            if(currentGuess === props.UserChoice)
            {
                props.onGameOver(rounds)
            }
        }   ,[currentGuess,props.UserChoice,props.onGameOver])

        const nextGuesshandler = direction =>
        {
            if((direction==='lower'&&currentGuess<props.UserChoice)||(direction==='higher'&&currentGuess>props.UserChoice))
            {
                Alert.alert('Don\'t cheat man','Cheater please give right instruction',[{text: 'Sorry !',style: 'cancel'}]);
                return ;
            }
            if(direction==='lower')
                currenthigh.current=currentGuess;
            else
                currentlow.current=currentGuess;
                const nextnumber = generateRandomBetween(currentlow.current,currenthigh.current,currentGuess);
                setPrevious(currentGuess);
                setCurrentGuess(nextnumber);
                setRounds(curRounds => curRounds + 1);
            
        }
        return (
            <View style={style.screen} >
                <Text style={style.text}>Opponent Guess</Text>
                    <Outnumber Number={currentGuess} style={style.num}/>
            <Card style={style.buttonContainer}>
            
            <Button title = "LOWER" onPress={nextGuesshandler.bind(this,'lower')}  />
            <Button title = "HIGHER" onPress={nextGuesshandler.bind(this,'higher')} />

            </Card>
            <Card style={style.sysguess}>
                <View>
                <Text>Previous Guess</Text>
                <Card>
                    <Text style = {style.inner} >{previous}</Text>
                </Card>
                </View>
                <View style = {style.adjust}>
                <Text>Current Guess</Text>
                <Card>
                    <Text style = {style.inner} >{currentGuess}</Text>
                </Card>
                </View>
            </Card>
            </View>
)
};

const style = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex :1,
        padding : 10
    },
    text :{
        fontSize: 30,
        fontFamily : 'Italian'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        marginTop : 20,
        maxWidth: '80%'
    },
    num:{
        borderWidth : 5,
        borderBottomWidth:5,
        borderRadius : 10,
        padding: 7,
        textAlign:'center'
    },
    sysguess :{
        flexDirection: 'row',
        width: 370
    },
    inner : {
        textAlign: 'center'
    },
    adjust :{
        marginLeft : '35%'
    }
})
export default GameScreen;