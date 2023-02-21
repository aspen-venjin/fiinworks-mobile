import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

function AppActivityIndicator({
    color,
    size,
    ...otherProps
}) {
    return (
        <View style={ styles.container }>
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
        flex: 1
    }
})

export default AppActivityIndicator;