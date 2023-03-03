import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

import { GOOGLE_MAPS_APIKEY } from "@env";

import defaultStyles from '../../config/styles';

function AppRoute({
    origin,
    destination,
    strokeColor = defaultStyles.colors.black,
    strokeWidth = 2,
    ...otherProps
}) {
    return (
        <MapViewDirections
            origin={{
                latitude: origin.latitude,
                longitude: origin.longitude
            }}
            destination={{
                latitude: destination.latitude,
                longitude: destination.longitude
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={ strokeWidth }
            strokeColor={
                strokeColor
            }
            {...otherProps}
        />
    );
}

export default AppRoute;