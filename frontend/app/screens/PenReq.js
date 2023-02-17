import React, { useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import AppCard from "../components/AppCard";

import defaultStyles from "../config/styles";

let dummy = [
  {
    id: 1,
    name: "John Doe",
    requestType: "claim",
    amount: 1000,
    date: "2022-01-01",
  },
  {
    id: 2,
    name: "Jane Doe",
    requestType: "claim",
    amount: 2000,
    date: "2022-02-01",
  },
  {
    id: 3,
    name: "Jim Smith",
    requestType: "travel",
    destination: "New York",
    date: "2022-03-01",
  },
  {
    id: 4,
    name: "Sophie Williams",
    requestType: "travel",
    destination: "London",
    date: "2022-04-01",
  },
  {
    id: 5,
    name: "Olivia Brown",
    requestType: "claim",
    amount: 1500,
    date: "2022-05-01",
  },
];

function PenReq() {
  const setInitValue = (requestType) => {    
    count=dummy.filter((request) => request.requestType === requestType).length
    return count
  };
  const [req, setReq] = useState({
    claim: setInitValue("claim"),
    travel: setInitValue("travel"),
  });
  const CT = [
    {
      id: "claim",
      title: req.claim,
      subTitle: "Pending Claims",
      containerColor: defaultStyles.colors.secondary_yellow,
      onPress: () => claimCounter(),
    },
    {
      id: "travel",
      title: req.travel,
      subTitle: "Pending Travel Requisitions",
      containerColor: defaultStyles.colors.secondary_teal,
      onPress: () => travelCounter(),
    },
  ];

  const claimCounter = () => {
    setReq({ ...req, claim: req.claim + 1 });
  };
  const travelCounter = () => {
    setReq({ ...req, travel: req.travel + 1 });
  };

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <FlatList
          horizontal={true}
          data={CT}
          renderItem={(itemData, index) => {
            return (
              <View style={styles.flatView}>
                <AppCard
                  title={itemData.item.title}
                  subTitle={itemData.item.subTitle}
                  subtitleStyle={styles.subtitleStyle}
                  titleStyle={styles.titleStyle}
                  titleContainer={styles.titleContainer}
                  onPress={itemData.item.onPress}
                  containerStyle={{
                    backgroundColor: itemData.item.containerColor,
                    width: 150,
                    margin: 10,
                    height: 100,
                    flexDirection: "row",
                  }}
                  titleContainer_Style={styles.titleContainer_Style}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
export default PenReq;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
  },
  flatView: {
    margin: 20,
    fontSize: 25,
    marginHorizontal: 5,
    width: "50%",
    flex: 1,
  },
  subtitleStyle: {
    fontSize: 10,
    fontWeight: "500",
    paddingLeft: 30,
  },
  titleStyle: {},
  titleContainer_Style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
