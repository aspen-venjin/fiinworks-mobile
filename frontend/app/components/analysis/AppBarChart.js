import React from 'react';
import { StyleSheet, View } from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryLabel } from 'victory-native';

import AppArrowHead from './AppArrowHead';
import AppBarSummary from './AppBarSummary';
import defaultStyles from '../../config/styles';

import {
    getFirstIndexInc,
    getMax,
    getPlaces,
    getQuarterData,
    getSize,
    zeroFill
} from '../../functions/bar-chart';

function AppBarChart({
    data,
    metric = "RM",
    title,
    subTitle
}) {
    return (
        <View>
            <VictoryChart
                padding={70}
            >
                <VictoryLabel 
                    text={ title }
                    style={{ ...styles.text, ...styles.title }}
                    x={25}
                    y={15} 
                />
                <VictoryLabel 
                    text={ subTitle }
                    style={{ ...styles.text, ...styles.subTitle }}
                    x={25}
                    y={35} 
                />
                <VictoryAxis
                    style={{
                        ...styles.axis,
                        tickLabels: {
                            fill: defaultStyles.colors.primary,
                            fontSize: getSize(data).font
                        }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    domain={{
                        y: [ 0, zeroFill(getFirstIndexInc(getMax( data )), getPlaces(getMax( data ))) * 1.1 ]
                    }}
                    axisComponent={ <AppArrowHead /> }
                    tickFormat={(x) => (`${metric}${x}`)}
                    style={{ ...styles.axis, ...styles.verticalAxis }}
                />
                <VictoryGroup
                    offset={ defaultStyles.size.width * getSize(data).size }
                    domainPadding={{ x: 10 }}
                    labels={({ datum }) => [...getQuarterData( data, datum.type )]}
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={5}
                            pointerLength={80}
                            renderInPortal={false}
                        />
                    }
                    events={[
                        {
                            childName: "all",
                            target: "data",
                            eventHandlers: {
                                onPress: ( evt, pressedProps ) => {
                                    const selectedDataIndex = pressedProps.index;
                                    return [
                                        {
                                            childName: "all",
                                            target: 'labels',
                                            mutation: props => {
                                                let activeState = true;
                                            
                                                if ( props.active === true ) activeState = false;

                                                return props.index ===
                                                    selectedDataIndex
                                                    ? { active: activeState }
                                                    : { active: false } 
                                            },
                                        }
                                    ];
                                }
                            }
                        }
                    ]}
                >
                    { data.map(
                        ( item, index ) => {
                            return (
                                <VictoryBar
                                    data={ item.data }
                                    key={ index }
                                    barWidth={ defaultStyles.size.width * getSize(data).size }
                                    style={{
                                        data: {
                                            ...styles.bar,
                                            fill: item.color
                                        }
                                    }}
                                    x="type"
                                    y="amount"
                                />
                            )
                        }
                    )}
                </VictoryGroup>
            </VictoryChart>
            <AppBarSummary
                data={ data }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    axis: {
        axis: {
            stroke: defaultStyles.colors.primary,
            strokeWidth: 2
        }
    },
    verticalAxis: {
        axisLabel: {
            padding: 35
        },
        ticks: {
            size: 5,
            stroke: defaultStyles.colors.primary,
            strokeWidth: 2
        },
        tickLabels: {
            fill: defaultStyles.colors.primary,
            fontSize: 10
        }
    },
    bar: {
        stroke: defaultStyles.colors.primary,
        strokeWidth: 1
    },
    subTitle: {
        fontWeight: null,
        fontSize: 14,
        textAlign: null
    },
    text: {
        ...defaultStyles.text,
        fill: defaultStyles.colors.primary,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        textAlign: null
    }
})

export default AppBarChart;