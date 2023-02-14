import React from 'react';
import { StyleSheet } from 'react-native';

import { VictoryPie } from 'victory-native';

import defaultStyles from '../../config/styles';

function AppVictoryPie({
    data,
    colorScale,
    selected,
    setSelected,
    ...otherProps
}) {
    const setSelectedByName = ( name ) => {
        setSelected(
            JSON.parse(
                JSON.stringify( data ))
                    .filter( item => item.name == name )[0]
        )
    }

    return (
        <VictoryPie
            data={ data }
            labels={( datum ) => `${datum.y}`}
            radius={({ datum }) => ( selected && selected.name == datum.name ) ? defaultStyles.pie.radius : defaultStyles.pie.radius - 10}
            cornerRadius={({ datum }) => ( selected && selected.name == datum.name ) ? defaultStyles.pie.cornerRadius : 0}
            // padAngle={ 1.5 }
            innerRadius={ defaultStyles.pie.innerRadius }
            labelRadius={({ innerRadius }) => ( innerRadius * defaultStyles.pie.labelRadius )}
            style={{
                ...styles.pie,
                labels: { 
                    fill: ({ datum }) => ( selected && selected.name == datum.name ) ? defaultStyles.colors.primary : defaultStyles.colors.transparent,
                    ...styles.pie.labels
                }
            }}
            width={ defaultStyles.size.width }
            height={ defaultStyles.size.width }
            colorScale={ colorScale }
            events={[{
                target: "data",
                eventHandlers: {
                    onPress: () => {
                        return [
                            {
                                target: "labels",
                                mutation: ({ index }) => setSelectedByName( data[index].name )
                            }
                        ]
                    }
                }
            }]}
            {...otherProps}
        />
    );
}

const styles = StyleSheet.create({
    pie: {
        labels: {
            ...defaultStyles.text,
            fontWeight: 'bold',
            fontSize: 13
        },
        parent: {
            elevation: 3,
            shadowColor: defaultStyles.colors.black,
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84
        }
    }
})

export default AppVictoryPie;