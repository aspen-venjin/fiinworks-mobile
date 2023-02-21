import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import AppActivityIndicator from '../../components/AppActivityIndicator';
import Approvals from './tab_view/Approvals';
import defaultStyles from '../../config/styles';
import MyClaim from './tab_view/MyClaim';
import Screen from '../../components/Screen';

const renderScene = SceneMap({
    my_claims: MyClaim,
    approvals: Approvals
})

function Dashboard() {
    const [ view, setView ] = useState({
        index: 0,
        routes: [
            { key: 'my_claims', title: 'My Claims' },
            { key: 'approvals', title: 'Approvals' }
        ]
    });

    return (
        <Screen>
            <TabView
                initialLayout={ styles.initialLayout }
                navigationState={ view }
                onIndexChange={() => setView( view )}
                renderLazyPlaceholder={() => <AppActivityIndicator />}
                renderScene={ renderScene }
                renderTabBar={( props ) =>
                    <TabBar
                        {...props}
                        indicatorStyle={ styles.indicatorStyle }
                        labelStyle={ styles.text }
                        pressColor={'transparent'}
                        style={ styles.tabBar }
                        tabStyle={ styles.tabStyle }
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    indicatorStyle: {
        backgroundColor: defaultStyles.colors.pink
    },
    initialLayout: {
        width: defaultStyles.size.width
    },
    tabBar: {
        backgroundColor: defaultStyles.colors.white
    },
    tabStyle: {
        width: 'auto'
    },
    text: {
        ...defaultStyles.text,
        color: defaultStyles.colors.primary,
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Dashboard;