import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';

function AppLogo({
    style
}) {
    return (
        <View style={[ styles.container, style ]}>
            <Image resizeMode="contain" style={ styles.fiinworks_image } source={require('../assets/fiinworks.png')} />
            <View style={ styles.horizontal_line }></View>
            <Image resizeMode="contain" style={ styles.afiintra_image } source={require('../assets/afiintra.png')} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    afiintra_image: {
        height: 20,
        width: 65,
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    fiinworks_image: {
        height: 45,
        width: 50,
    },
    horizontal_line: {
        backgroundColor: defaultStyles.colors.black,
        height: 50,
        marginHorizontal: 10,
        width: 1,
    }
})

export default AppLogo;