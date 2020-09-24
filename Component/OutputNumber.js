import React from 'react';
import { View ,Text ,StyleSheet,Button } from 'react-native';
import Card from '../Component/Card'


const OutputNumber = props =>
{
    
    return(
        <View style = {style.text}>
            <Text style = {{...style.num,...props.style}}> {props.Number} </Text>
        </View>
        
    )
}
const style = StyleSheet.create({

    

    text: {
        marginTop: 10,
        alignItems: 'center'
    },
    
    num: {
        color: '#08DDF0',
        fontSize: 25,
        borderBottomWidth: 2,
        marginBottom: 40,
        borderColor: '#08DDF0',
        fontFamily : 'Dancing-SemiBold'
    }
   
});

export default OutputNumber;