import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function AppListItem({
    AttachmentComponent,
    containerStyle,
    detailsContainer_Style,
    onPress,
    textStyle,
    title,
    titleStyle,
    subTitle,
    subTitleStyle,
    description1,
    description1_Style,
    description2,
    description2_Style,
    PostscriptComponent,
    postscriptStyle
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[ styles.container, containerStyle ]}>
                { AttachmentComponent && <View style={ styles.attachment }>
                    { AttachmentComponent }
                </View>}
                <View style={[ styles.detailsContainer, detailsContainer_Style ]}>
                    <View style={ styles.titleContainer }>
                        <AppText style={[ styles.text, textStyle, titleStyle ]}>{ title }</AppText>
                        { subTitle && <AppText adjustsFontSizeToFit={true} numberOfLines={3} style={[ styles.text, textStyle, subTitleStyle ]}>{ subTitle }</AppText> }
                        { description1 && <AppText adjustsFontSizeToFit={true} numberOfLines={3} style={[ styles.text, textStyle, description1_Style ]}>{ description1 }</AppText> }
                        { description2 && <AppText adjustsFontSizeToFit={true} numberOfLines={3} style={[ styles.text, textStyle, description2_Style ]}>{ description2 }</AppText> }
                    </View>
                    { PostscriptComponent && <View style={[ styles.postscriptContainer, postscriptStyle ]}>
                        { PostscriptComponent }
                    </View> }
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    attachment: {
        marginRight: 20
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleContainer: {
        justifyContent: 'space-between',
    },
    text: {
        color: defaultStyles.colors.primary,
        fontSize: 14,
        marginVertical: 3
    },
    postscriptContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

export default AppListItem;