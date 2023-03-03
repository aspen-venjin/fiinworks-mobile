import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import AppMarker from './AppMarker';
import AppRoute from './AppRoute';
import mapStyles from '../../config/map_config';

import { defaultRegion, getIndentifier, midValleyRegion } from '../../functions/map';

function AppMap({
    markerArr,
    routeArr,
    style
}) {
    const ref = useRef( null );

    return (
        <MapView
            ref={ ref }
            customMapStyle={ mapStyles.map }
            followsUserLocation
            defaultRegion={ defaultRegion }
            mapType='mutedStandard'
            onMapReady={() =>
                setTimeout(() => {
                    if( !markerArr ) return ref.current.animateToRegion( midValleyRegion );
            
                    ref.current.fitToSuppliedMarkers(getIndentifier( markerArr ), {
                        edgePadding: { top: 200, bottom: 200, left: 200, right: 200 }
                    })
                })
            }
            provider={ PROVIDER_GOOGLE }
            rotateEnabled
            showsUserLocation
            style={[ styles.container, style ]}
            toolbarEnabled
            zoomEnabled
        >
            { 
                markerArr? 
                markerArr.map(( item, index ) => (
                    <AppMarker
                        key={ index }
                        latitude={ item.latitude }
                        longitude={ item.longitude }
                        title={ item.title }
                        description={ item.description }
                        identifier={ item.identifier }
                        iconComponent={ item.iconComponent }
                    />
                ))
                :
                null
            }
            { 
                routeArr?
                routeArr.map(( item, index ) => (
                    <AppRoute
                        key={ index }
                        origin={{
                            latitude: item.origin.latitude,
                            longitude: item.origin.longitude
                        }}
                        destination={{
                            latitude: item.destination.latitude,
                            longitude: item.destination.longitude
                        }}
                        strokeColor={ item.strokeColor }
                        strokeWidth={ item.strokeWidth }
                    />
                ))
                :
                null
            }
        </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AppMap;