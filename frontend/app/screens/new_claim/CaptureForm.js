import React from 'react';
import { StyleSheet, View } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppAttachment from '../../components/AppAttachment';
import AppBottomSheet from '../../components/AppBottomSheet';
import AppListItem from '../../components/AppListItem';
import defaultStyles from '../../config/styles';
import Screen from '../../components/Screen';

function CaptureForm() {
    return (
        <GestureHandlerRootView style={ styles.container }>
            <Screen>
                <AppAttachment
                    image={require('../../assets/receipt.jpeg')}
                    height={ defaultStyles.size.height* 0.85 }
                    width={ defaultStyles.size.width }
                    resizeMode="contain"
                />
                <AppBottomSheet
                    handleStyle={ styles.handleStyle }
                    handleContainerStyle={ styles.handleContainerStyle }
                    index={1}
                    snapPoints={[ 105, defaultStyles.size.height * 0.5 ].sort(( first, second ) => first - second)}
                >
                    <View style={ styles.alert }>
                        <AppListItem
                            AttachmentComponent={
                                <MaterialCommunityIcons
                                    name="alert-circle-outline"
                                    color={ defaultStyles.colors.primary }
                                    size={ 60 }
                                />
                            }
                            attachmentStyle={ styles.attachmentStyle }
                            containerStyle={ styles.containerStyle }
                            detailsContainer_Style={ styles.detailsContainer_Style }
                            title="Image Recognition Assistance"
                            titleStyle={ styles.titleStyle }
                            titleContainerStyle={ styles.titleContainerStyle }
                            subTitle="Please confirm if the information captured below are correct."
                            subTitleStyle={ styles.subTitleStyle }
                            textStyle={ styles.textStyle }
                        />
                    </View>
                </AppBottomSheet>
            </Screen>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    alert: {
        backgroundColor: defaultStyles.colors.pink,
        paddingBottom: 20
    },
    attachmentStyle: {
        marginRight: 5
    },
    container: {
        flex: 1
    },
    containerStyle: {
        justifyContent: 'center'
    },
    detailsContainer_Style: {
        flex: null,
        flexShrink: 1,
        width: "70%"
    },
    handleStyle: {
        backgroundColor: defaultStyles.colors.transparent 
    },
    handleContainerStyle: {
        backgroundColor: defaultStyles.colors.pink
    },
    subTitleStyle: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    textStyle: {
        marginVertical: 3,
        textAlign: 'center'
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleContainerStyle: {
        marginRight: null
    }
});

export default CaptureForm;