import React from 'react';
import { Marker } from 'react-native-maps';

function AppMarker({
    description,
    iconComponent,
    latitude,
    longitude,
    title,
    ...otherProps
}) {
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude
            }}
            title={ title }
            description={ description }
            {...otherProps}
        >
            { iconComponent }
        </Marker>
    );
}

export default AppMarker;