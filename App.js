import React ,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header';
import SGScreen from './Screen/StartGameScreen';
import GScreen from './Screen/GameScreen';
import GOScreen from './Screen/GameOverScreen';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

const Fetchfonts = () =>
{
 
  return (Fonts.loadAsync({
    'Ceviche' : require('./assets/Fonts/CevicheOne-Regular.ttf'),
    'Italian' : require('./assets/Fonts/Italianno-Regular.ttf'),
    'Mono': require('./assets/Fonts/Monoton-Regular.ttf'),
    'Dancing': require('./assets/Fonts/DancingScript-Regular.ttf'),
    'Dancing-Bold': require('./assets/Fonts/DancingScript-Bold.ttf'),
    'Dancing-Medium': require('./assets/Fonts/DancingScript-Medium.ttf'),
    'Dancing-SemiBold': require('./assets/Fonts/DancingScript-SemiBold.ttf'),

  }));
};
  
export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRound] = useState(0);
  const [dataLoading,setDataLoading] = useState(false);

  if(!dataLoading)
  {
    return (< AppLoading startAsync={Fetchfonts} onFinish={ () => setDataLoading(true) } onError = { (err) => console.log(err) } />) ;
  }

  const gameResetHandler = () =>
  {
      setGuessRound(0);
      setUserNumber(null);
  }

  const gameScreenHandler = selectedNumber =>
  {
      setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfRound =>
  {
    setGuessRound(numOfRound);
  }
  
  let context = <SGScreen onStartGame = {gameScreenHandler}/>

  if(userNumber && guessRounds === 0 )
  {
    context=<GScreen UserChoice={userNumber}  onGameOver={gameOverHandler} />
  }
  else if(guessRounds > 0)
  {
    context = <GOScreen rounds={guessRounds} userGuess={userNumber} Reset={gameResetHandler} />
  }
  return (
    <View style={styles.Screen}>
      <Header Title = "Guess a Number"/>      
      {context}
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});
