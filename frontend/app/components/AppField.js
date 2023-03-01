import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function AppField({
    AppComponent,
    containerStyle,
    componentStyle,
    textStyle,
    title
}) {
    return (
        <View style={ containerStyle }>
            <AppText style={[ styles.text, textStyle ]}>
                { title }
            </AppText>
            <View style={[ styles.line, componentStyle ]}>
                { AppComponent }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: defaultStyles.colors.primary_grey,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2
    },
    line: {
        borderBottomColor: defaultStyles.colors.secondary_grey,
        borderBottomWidth: 2
    }
})

export default AppField;