import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../AppText';

function AppBarLegendItem({
    color,
    title
}) {
    return (
        <View style={ styles.container }>
            <View style={[ styles.pallete, { backgroundColor: color } ]}/>
            <AppText style={ styles.text }>{ title }</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 20
    },
    pallete: {
        height: 10,
        width: 20
    },
    text: {
        fontSize: 12,
        marginLeft: 10
    }
})

export default AppBarLegendItem;