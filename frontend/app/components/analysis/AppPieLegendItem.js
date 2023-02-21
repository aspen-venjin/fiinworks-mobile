import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

import { isBrightColor } from '../../functions/pie-chart';

function AppPieLegendItem({
    item,
    metric,
    selected,
    setSelectedByName
}) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: ( selected && selected.name == item.name ) ? item.color : defaultStyles.colors.white }
            ]}
            onPress={() => setSelectedByName( item.name )}
        >
            <View style={ styles.titleContainer }>
                <View
                    style={[
                        styles.pallete,
                        { backgroundColor: ( selected && selected.name == item.name ) ? (isBrightColor(item.color)? defaultStyles.colors.primary : defaultStyles.colors.white) : item.color }
                    ]}
                />
                <AppText style={[
                    styles.title,
                    { color: ( selected && selected.name == item.name ) ? (isBrightColor(item.color)? defaultStyles.colors.primary : defaultStyles.colors.white) : defaultStyles.colors.primary }
                ]}>{ item.name }</AppText>
            </View>
            <View style={ styles.metricContainer }>
                <AppText style={[
                    styles.metric,
                    { color: (selected && selected.name == item.name) ? (isBrightColor(item.color)? defaultStyles.colors.primary : defaultStyles.colors.white) : defaultStyles.colors.primary }
                ]}>{ metric }{ item.y } - { item.label }</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: 12
    },
    metric: {
        ...defaultStyles.text,
        fontSize: 13,
        fontWeight: 'bold',
        lineHeight: 22
    },
    metricContainer: {
        justifyContent: 'center'
    },
    pallete: {
        borderRadius: 5,
        height: 20,
        width: 20
    },
    title: {
        ...defaultStyles.text,
        fontSize: 13,
        fontWeight: 'bold',
        lineHeight: 22,
        marginLeft: 8
    },
    titleContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginRight: 10
    }
})

export default AppPieLegendItem;