import  React from 'react';
import {View , Button ,StyleSheet} from 'react-native';

const ButtonComponents = props =>
{
    return(
        <View style = {style.buttonAlignment}>
                    <View style={style.bx}>
                        <Button color = "#08F0BD" title = "Reset"   onPress = { props.reset } />
                    </View>
                    <View style={style.bx}>
                        <Button color = "#76F008" title = "Confirm" onPress = { props.confirm } />
                    </View>
        </View>)
}

const style = StyleSheet.create({
    buttonAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '130%',
        paddingHorizontal: 50,
        marginTop : 10
    },

    bx: {
        width: 90
    },
});

export default ButtonComponents;