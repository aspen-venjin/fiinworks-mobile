import React from 'react';

import { Camera, CameraType } from 'expo-camera';

function AppCamera({
    children,
    type = CameraType.back
}) {
    return (
        <Camera
            type={ type }
        >
            { children }
        </Camera>
    );
}

export default AppCamera;