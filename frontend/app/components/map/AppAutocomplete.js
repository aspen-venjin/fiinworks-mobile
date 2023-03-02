import React from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from "@env";

import mapStyles from '../../config/map_config';

function AppAutocomplete({
    country = 'my',
    iconComponent,
    listItemFunction,
    minLength,
    placeholder,
    style,
    searchIconComponent,
    width
}) {
    const query = {
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
        components: `country:${country}`
    };

    return (
        <GooglePlacesAutocomplete 
            debounce={ 400 }
            enablePoweredByContainer={ false }
            fetchDetails
            keyboardShouldPersistTaps="handled"
            minLength={ minLength }
            nearbyPlacesAPI="GooglePlacesSearch"
            placeholder={ placeholder }
            query={ query }
            renderLeftButton={ iconComponent }
            renderRow={( rowData ) => {
                const title = rowData.structured_formatting.main_text;
                const subTitle = rowData.structured_formatting.secondary_text;
                return listItemFunction( searchIconComponent, title, subTitle, width )
            }}
            returnKeyType="search"
            styles={{
                ...mapStyles.autocomplete,
                textInputContainer: {
                    ...mapStyles.autocomplete.textInputContainer,
                    width: width
                },
                separator: {
                    ...mapStyles.autocomplete.separator,
                    width: width
                },
                ...style
            }}
        />
    );
}

export default AppAutocomplete;