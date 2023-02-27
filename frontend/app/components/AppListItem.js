import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function AppListItem({
    AttachmentComponent,
    attachmentStyle,
    containerStyle,
    detailsContainer_Style,
    onPress,
    textStyle,
    title,
    titleStyle,
    titleContainerStyle,
    subTitle,
    subTitleStyle,
    description1,
    description1_Style,
    description2,
    description2_Style,
    PostscriptComponent,
    postscriptStyle,
    StatusComponent
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[ styles.container, containerStyle ]}>
                { AttachmentComponent && <View style={[ styles.attachment, attachmentStyle ]}>
                    { AttachmentComponent }
                </View>}
                <View style={[ styles.detailsContainer, detailsContainer_Style ]}>
                    <View style={[ styles.titleContainer, titleContainerStyle ]}>
                        <AppText style={[ styles.text, textStyle, titleStyle ]}>{ title }</AppText>
                        { subTitle && <AppText numberOfLines={3} style={{ ...styles.text, ...textStyle, ...subTitleStyle }}>{ subTitle }</AppText> }
                        { description1 && <AppText adjustsFontSizeToFit={true} numberOfLines={3} style={[ styles.text, textStyle, description1_Style ]}>{ description1 }</AppText> }
                        { description2 && <AppText adjustsFontSizeToFit={true} numberOfLines={3} style={[ styles.text, textStyle, description2_Style ]}>{ description2 }</AppText> }
                        { StatusComponent }
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
        flexDirection: 'row'
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1,
        marginRight: 10
    },
    text: {
        color: defaultStyles.colors.primary,
        fontSize: 14,
        marginVertical: 2
    },
    postscriptContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

export default AppListItem;