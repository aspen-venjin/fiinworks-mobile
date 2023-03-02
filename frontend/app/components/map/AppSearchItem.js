import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

import { getDecimalFromPercentage } from '../../functions/map';

function AppSearchItem({
    iconComponent,
    title,
    subTitle,
    width = '100%'
}) {
    return (
        <View style={[ styles.resultContainer, { width: defaultStyles.size.width * getDecimalFromPercentage( width )}]}>
            { iconComponent && <View style={ styles.iconContainer }>
                { iconComponent }
            </View> }
            <View style={[ styles.detailsContainer, { width: defaultStyles.size.width * getDecimalFromPercentage( width )}]}>
                <AppText numberOfLines={ 1 } style={ styles.title }>{ title }</AppText>
                <AppText numberOfLines={ 1 } style={ styles.subTitle }>{ subTitle }</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1
    },
    iconContainer: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        marginRight: 10,
        width: 30
    },
    resultContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    subTitle: {
        color: defaultStyles.colors.primary_grey,
        fontSize: 10
    },
    title: {
        color: defaultStyles.colors.black,
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default AppSearchItem;