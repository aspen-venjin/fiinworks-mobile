import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import AppCard from "../components/AppCard";

import defaultStyles from "../config/styles";

const colors = [defaultStyles.colors.secondary_yellow,defaultStyles.colors.secondary_teal,]
const CT = [
  { id: "PendClaim", title: 10, subTitle: "Pending Claims",  },
  { id: "PendTravel", title: 5, subTitle: "Pending Travel Requisitions", },
];

function PenReq() {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <FlatList
          horizontal={true}
          data={CT}
          renderItem={(itemData,index) => {
            return (
              <View style={styles.flatView}>
                <AppCard
                  title={itemData.item.title}
                  subTitle={itemData.item.subTitle}
                  titleStyle={styles.CardTitle}
                  subtitleStyle={styles.CardSub}
                  containerStyle={styles.Card && {backgroundColor: colors[index % colors.length]}}
                  titleContainer={styles.titleContainer}
                />
              </View>
            );
          }}
          keyExtractor={(item,index) => item.id}
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
  Card: {
    width: 150,
    margin: 10,
    height: 100,
    flexDirection: "row",
  },
  CardSub: {
    fontSize: 10,
    fontWeight: "500",
  },
  CardTitle: {
    alignItems: "center",
  },
  titleContainer: {

  },
});
