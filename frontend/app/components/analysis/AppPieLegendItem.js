import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

function AppPieLegendItem({
    color = "primary",
    text
}) {
    return (
        <View style={ styles.container }>
            <View style={[ styles.palette, { backgroundColor: defaultStyles.colors[ color ] } ]} />
            <AppText style={ styles.text }>{ text }</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    palette: {
        alignSelf: 'center',
        height: 10,
        marginRight: 15,
        width: 25
    },
    text: {
        color: defaultStyles.colors.primary,
        fontWeight: 'bold'
    }
})

export default AppPieLegendItem;