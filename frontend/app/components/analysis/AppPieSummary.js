import React from 'react';
import { FlatList, View } from 'react-native';

import AppPieLegendItem from './AppPieLegendItem';

function AppPieSummary({
    data,
    metric = "RM",
    selected,
    setSelected
}) {
    const setSelectedByName = ( name ) => {
        setSelected(
            JSON.parse(
                JSON.stringify( data ))
                    .filter( item => item.name == name )[0]
        )
    }

    return (
        <View>
            <FlatList
                data={ data }
                keyExtractor={ item => item.id.toString() }
                renderItem={({ item }) => 
                    <AppPieLegendItem
                        item={ item }
                        metric={ metric }
                        selected={ selected }
                        setSelectedByName={ setSelectedByName }
                    />
                }
            />
        </View>
    );
}

export default AppPieSummary;