import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppImage from './AppImage';
import defaultStyles from '../config/styles';

function AppAttachment({
// General
    image,
// Image
    border,
    height = 150,
    style,
    width = 90,
// Icon
    backgroundColor = defaultStyles.colors.white,
    color = defaultStyles.colors.primary,
    name,
    size = 50,
// Others
    ...otherProps
}) {
    const borderRadius = Math.ceil(size*0.15);
    const iconSize = Math.ceil(size*0.6);

    return (
        <View>
            { image && <AppImage 
                border={ border }
                height={ height }
                image={ image }
                style={ style }
                width={ width }
                {...otherProps}
            /> }
            { !image && <View 
                style={[ 
                    styles.container,
                    { backgroundColor },
                    { height: size, width: size },
                    border && { borderRadius },
                    style
                ]}
                {...otherProps}
            >
                <MaterialCommunityIcons 
                    name={ name }
                    color={ color }
                    size={ iconSize }
                />
            </View> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AppAttachment;