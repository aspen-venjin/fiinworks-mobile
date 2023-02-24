import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppImage from './AppImage';
import defaultStyles from '../config/styles';

function AppLogo({
    style
}) {
    return (
        <View style={[ styles.container, style ]}>
            <AppImage 
                height={40}
                image={require('../assets/fiinworks.png')}
                resizeMode="contain"
                width={45}
            />
            <View style={ styles.horizontal_line }></View>
            <AppImage 
                height={15}
                image={require('../assets/afiintra.png')}
                resizeMode="contain"
                width={50}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontal_line: {
        backgroundColor: defaultStyles.colors.black,
        height: 50,
        marginHorizontal: 10,
        width: 1,
    }
})

export default AppLogo;