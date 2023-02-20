import React from 'react';
import { FlatList, View } from 'react-native';

import AppPieLegendItem from './AppPieLegendItem';

import { getSelectedName } from '../../functions/pie-chart';

function AppPieSummary({
    data,
    metric = "RM",
    selected,
    setSelected
}) {
    return (
        <View>
            <FlatList
                data={ data }
                keyExtractor={( item, index ) => index.toString()}
                renderItem={({ item }) => 
                    <AppPieLegendItem
                        item={ item }
                        metric={ metric }
                        selected={ selected }
                        setSelectedByName={( name ) => setSelected(getSelectedName( data, name ))}
                    />
                }
            />
        </View>
    );
}

export default AppPieSummary;