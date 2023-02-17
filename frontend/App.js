import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PenReq from './app/screens/PenReq';
import AppPie from './app/screens/AppPie';


export default function App() {

  return (
    <View style={styles.container}>
      <PenReq/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
