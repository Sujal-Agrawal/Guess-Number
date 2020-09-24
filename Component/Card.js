import React from 'react';
import {View,StyleSheet} from  'react-native';

const Card = props =>
{
    return(   
    <View style = {{...style.card,...props.style}}>
        {props.children}
    </View>
    );
}

const style = StyleSheet.create({

    card: {
        
        
        margin : 20,
        padding: 20,
        elevation: 12,
        borderRadius: 10,
        backgroundColor: 'white',
        
        // below lines only work on ios 
        shadowColor: 'yellow',
        shadowOffset: {width : 0 , height : 2},
        shadowOpacity: 0.26,
        shadowRadius: 6
    }
})
export default Card ;


{}