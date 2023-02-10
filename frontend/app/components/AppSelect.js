import React, { useState } from 'react';

import defaultStyle from '../config/styles';
import DropDownPicker from 'react-native-dropdown-picker';

function AppSelect({
    items,
    setItems,
    value,
    setValue,
    placeholder,
    searchable = true,
    searchPlaceholder,
    ...otherProps
}) {
    const [ isOpen, setOpen ] = useState( false );

    return (
        <DropDownPicker
            open={ isOpen }
            value={ value }
            items={ items }
            setOpen={ setOpen }
            setValue={ setValue }
            setItems={ setItems }
            searchable={ searchable }
            arrowIconStyle={{
                tintColor: defaultStyle.colors.primary,
            }}
            placeholder={ placeholder }
            placeholderStyle={{
                ...defaultStyle.text,
                color: defaultStyle.colors.secondary_grey,
                fontSize: 16
            }}
            searchPlaceholder={ searchPlaceholder }
            searchTextInputStyle={{
                color: defaultStyle.colors.black
            }}
            listItemLabelStyle={{
                color: defaultStyle.colors.primary,
                fontWeight: 'bold' 
            }}
            selectedItemContainerStyle={{
                backgroundColor: defaultStyle.colors.tertiary_grey 
            }}
            style={{
                borderWidth: null,
                borderRadius: null,
                marginBottom: 0,
                paddingLeft: 0,
                paddingBottom: 0
            }}
            labelStyle={{
                ...defaultStyle.text,
                color: defaultStyle.colors.primary,
                fontWeight: 'bold'
            }}
            {...otherProps}
        />
    );
}

export default AppSelect;