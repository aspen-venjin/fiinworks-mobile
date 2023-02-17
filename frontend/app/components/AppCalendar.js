import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';

import { dateFormatter } from '../functions/calendar';

function AppCalendar({
    date,
    iconColor = defaultStyles.colors.primary,
    setDate,
    size = 25,
    textStyle
}) {
    const [ isOpen, setOpen ] = useState(false);
    
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setOpen( true )}>
                <View style={ styles.container }>
                    <View style={ styles.textContainer }>
                        <AppText style={[ styles.text, textStyle ]} >{ date }</AppText>
                    </View>
                    <MaterialCommunityIcons name="calendar-month" size={ size } color={ iconColor } />
                </View>
            </TouchableWithoutFeedback>
            <DateTimePickerModal
                isVisible={ isOpen }
                mode="date"
                onConfirm={( dateSelected ) => {
                    const dateString = dateFormatter( dateSelected );
                    setDate( dateString );
                    setOpen( false );
                }}
                onCancel={() => setOpen( false )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        color: defaultStyles.colors.primary,
        fontSize: 22,
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default AppCalendar;