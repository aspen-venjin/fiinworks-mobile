import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles.js';

function AppErrorMessage({ error, visible }) {
    if(!visible || !error) return null;
    
    return (
        <AppText style={ styles.error }>
            { error }
        </AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: defaultStyles.colors.red,
        fontSize: 14
    }
})

export default AppErrorMessage;