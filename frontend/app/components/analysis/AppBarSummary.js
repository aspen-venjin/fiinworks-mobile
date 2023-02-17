import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppBarLegendItem from './AppBarLegendItem';

function AppBarSummary({
    data
}) {
    return (
        <View style={ styles.container }>
            <FlatList 
                numColumns={3}
                data={ data }
                keyExtractor={( item, index ) => index.toString()}
                renderItem={({ item }) => 
                    <AppBarLegendItem
                        color={ item.color }
                        title={ item.month }
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 70
    }
})

export default AppBarSummary;