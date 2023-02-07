import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import defaultStyles from '../config/styles'

function TestScreen() {
    return (
        <Screen>
            <AppText style={styles.text}>
                Testing
            </AppText>
        </Screen>
    );
}

export default TestScreen;

const styles = StyleSheet.create({
    text: {
        color: defaultStyles.colors.green,
        fontSize: 40,
        fontWeight: 'bold'
    }
});