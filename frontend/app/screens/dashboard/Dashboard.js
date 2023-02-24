import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import AppActivityIndicator from '../../components/AppActivityIndicator';
import AppAttachment from '../../components/AppAttachment';
import AppListItem from '../../components/AppListItem';
import AppLogo from '../../components/AppLogo';
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
            <View style={ styles.container }>
                <View style={ styles.userContainer }>
                    <AppListItem
                        AttachmentComponent={
                            <AppAttachment 
                                image={require('../../assets/henry_cavill.jpg')}
                                height={50}
                                width={50}
                                resizeMode="contain"
                                border
                            />
                        }
                        attachmentStyle={ styles.attachmentStyle }
                        title='Celestine Liew'
                        titleStyle={ styles.title }
                        subTitle='HR Manager'
                        subTitleStyle={ styles.subTitle }
                        description1='HR Department'
                        description1_Style={ styles.description1 }
                        textStyle={ styles.AppListItem_text }
                    />
                </View>
                <AppLogo />
            </View>
            <TabView
                initialLayout={ styles.initialLayout }
                navigationState={ view }
                onIndexChange={() => setView( view )}
                renderLazyPlaceholder={() => (
                    <AppActivityIndicator
                        color={ defaultStyles.colors.primary }
                        size="large"
                    />
                )}
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
    AppListItem_text: {
        marginVertical: null
    },
    attachmentStyle: {
        marginRight: 10
    },
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        paddingHorizontal: 20
    },
    description1: {
        fontSize: 10
    },
    indicatorStyle: {
        backgroundColor: defaultStyles.colors.pink
    },
    initialLayout: {
        width: defaultStyles.size.width
    },
    subTitle: {
        fontSize: 11,
        fontWeight: 'bold'
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
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    userContainer: {
        flex: 1
    }
})

export default Dashboard;