import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function AppCalendar({
    date,
    iconColor = defaultStyles.colors.primary,
    setDate,
    size = 25,
    textStyle
}) {
    const [ isOpen, setOpen ] = useState(false);
    
    const getMonthFromString = ( month ) => {
        return new Date( Date.parse(month +" 1, 2012") ).getMonth() + 1;
    }

    const getMonthFormat = ( month ) => {
        return month.toString().length === 2? month : `0${month}`;
    }

    const dateFormatter = ( date ) => {
        return [
            date.toDateString()
            .split(' ')
            .pop(), 
            ...date.toDateString()
            .split(' ')
            .slice(1, -1)
        ].reverse()
            .map(
                (item) => 
                item === date
                            .toDateString()
                            .split(' ')
                            .slice(1)
                            .shift()? 
                getMonthFormat(getMonthFromString(item)) 
                : 
                item
            )
            .join('/');
    }

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