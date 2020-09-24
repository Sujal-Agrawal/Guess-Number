import React from 'react';
import { Text , View , StyleSheet} from 'react-native';

const Header = props =>
{
    return(
        <View style = {style.H1}>
            <Text style = {style.H2}>{props.Title}</Text>
        </View>
    );
};

const style = StyleSheet.create({

    H1: {

        width: '100%',
        height: 110,
        paddingTop: 36,
        backgroundColor: '#F02E08',
        alignItems: 'center',
        justifyContent: 'center'
    },

    H2: {
        color: 'black',
        fontSize: 28,
        fontWeight:'800',
        fontFamily :'Mono'
    }
});

export default Header; 