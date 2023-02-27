import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import defaultStyles from '../config/styles';

function AppBottomSheet({
    children,
    handleStyle,
    handleContainerStyle,
    style,
    snapPoints = ['15%', '50%'],
    ...otherProps
}) {
    const ref = useRef();

    return (
        <BottomSheet
            ref={ ref }
            index={0}
            snapPoints={ snapPoints }
            overDragResistanceFactor={4}
            backgroundStyle={[ styles.container, style ]}
            handleStyle={[ styles.handleContainer, handleContainerStyle ]}
            handleIndicatorStyle={[ styles.handle, handleStyle ]}
            {...otherProps}
        >
            <BottomSheetView>
                { children }
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    handle: {
        backgroundColor: defaultStyles.colors.primary_grey,
        opacity: 0.6,
        width: '15%'
    },
    handleContainer: {
        backgroundColor: defaultStyles.colors.white,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
});

export default AppBottomSheet;