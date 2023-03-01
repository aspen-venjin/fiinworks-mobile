import React from 'react';
import { StyleSheet } from 'react-native';

import { Camera, CameraType } from 'expo-camera';

function AppCamera({
    children,
    setCamera,
    style,
    type = CameraType.back
}) {
    return (
        <Camera
            style={[ styles.container, style ]}
            type={ type }
            ref={ ref => setCamera(ref) }
        >
            { children }
        </Camera>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AppCamera;