import React, { useState } from 'react';
import { 
    Platform,
    StyleSheet,
    View
} from 'react-native';

import { Svg } from 'react-native-svg';

import AppPieSummary from './AppPieSummary';
import AppText from '../AppText';
import AppVictoryPie from './AppVictoryPie';
import defaultStyles from '../../config/styles';

function AppPieChart({
    colorScale,
    content,
    data,
    metric = "RM",
    subTitle,
    title,
    value,
}) {
    const [ selected, setSelected ] = useState( null );

    return (
        <View>
            <View>
                <AppText style={[ styles.text, styles.title ]}>{ title }</AppText>
                <AppText style={[ styles.text, styles.subTitle ]}>{ subTitle }</AppText>
            </View>

            <View style={ styles.container }>
                { Platform.OS == 'ios' ? 
                    <AppVictoryPie 
                        data={ data }
                        colorScale={ colorScale }
                        selected={ selected }
                        setSelected={ setSelected }
                    />
                    :
                    <Svg 
                        width={ defaultStyles.size.width } 
                        height={ defaultStyles.size.width } 
                        style={ styles.svg }
                    >
                        <AppVictoryPie 
                            standalone={ false }
                            data={ data }
                            colorScale={ colorScale }
                            selected={ selected }
                            setSelected={ setSelected }
                        />
                    </Svg>
                }
                
                <View style={ styles.summation }>
                    { value.toString().length > 6? 
                        <AppText 
                            numberOfLines={1}
                            style={[ styles.text, styles.value.long ]}
                        >{ metric }{ value }</AppText>
                        :
                        <AppText
                            style={[ styles.text, styles.value.short ]}
                        >{ metric }{ value }</AppText>
                    }
                    <AppText style={[ styles.text, styles.metric ]}>{ content }</AppText>
                </View>
            </View>

            <AppPieSummary 
                data={ data }
                metric={ metric }
                selected={ selected }
                setSelected={ setSelected }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    metric: {
        fontSize: 14,
        lineHeight: 18
    },
    subTitle: {
        fontWeight: null,
        fontSize: 14,
        textAlign: null
    },
    summation: {
        alignItems: 'center',
        height: defaultStyles.pie.radius,
        justifyContent: 'center',
        position: 'absolute',
        width: defaultStyles.pie.radius,
    },
    svg: {
        height: "auto",
        width: "100%"
    },
    text: {
        ...defaultStyles.text,
        color: defaultStyles.colors.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        fontSize: 18,
        textAlign: null
    },
    value: {
        long: {
            fontSize: 18,
            marginBottom: 5
        },
        short: {
            fontSize: 20,
            marginBottom: 5
        }
    }
})

export default AppPieChart;