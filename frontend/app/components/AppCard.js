import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function AppCard({
    containerStyle,
    icon,
    iconColor = defaultStyles.colors.white,
    onPress,
    subTitle,
    subtitleStyle,
    title,
    titleContainer_Style,
    titleStyle,
    size = 40
}) {
    return (
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={[ styles.container, containerStyle ]}>
                <View style={[ styles.titleContainer, titleContainer_Style ]}>
                    <AppText style={[ styles.text, titleStyle ]}>{ title }</AppText>
                    { subTitle && <AppText style={[ styles.text, subtitleStyle ]}>{ subTitle }</AppText> }
                </View>
                { icon && <View style={ styles.iconContainer }>
                    <MaterialCommunityIcons 
                        name={ icon }
                        size={ size }
                        color={ iconColor }
                    />
                </View>}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.secondary_yellow,
        borderRadius: 15,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        shadowColor: defaultStyles.colors.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        width: '47%'
    },
    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: defaultStyles.colors.white,
        fontWeight: '900'
    }
})

export default AppCard;