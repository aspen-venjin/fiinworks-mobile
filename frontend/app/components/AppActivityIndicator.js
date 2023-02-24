import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

function AppActivityIndicator({
    color,
    size,
    style,
    ...otherProps
}) {
    return (
        <View style={[ styles.container, style ]}>
            <ActivityIndicator 
                color={ color } 
                size={ size } 
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})

export default AppActivityIndicator;