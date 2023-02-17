import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppCard from "../components/AppCard";
import defaultStyles from "../config/styles";
import AppListItem from "../components/AppListItem";
import AppAttachment from "../components/AppAttachment";
import AppText from "../components/AppText";
import colors from "../config/colors";

function PenReq() {
  let dummy = [
    {
      id: 1,
      name: "John Doe",
      requestType: "claim",
      amount: 1000,
      date: "2022-01-01",
      department: "Human Resource",
      status: "Rejected",
      Type: "Petrol Claim",
    },
    {
      id: 2,
      name: "Jane Doe",
      requestType: "claim",
      amount: 2000,
      date: "2022-02-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
    {
      id: 3,
      name: "Jim Smith",
      requestType: "travel",
      destination: "New York",
      amount: 200,
      date: "2022-03-01",
      department: "IT",
      status: "Pending",
      Type: "Travel Requisition",
    },
    {
      id: 4,
      name: "Sophie Williams",
      requestType: "travel",
      amount: 500,
      destination: "London",
      date: "2022-04-01",
      department: "Human Resource",
      status: "Rejected",
      Type: "Travel Requisition",
    },
    {
      id: 5,
      name: "Olivia Brown",
      requestType: "claim",
      amount: 1500,
      date: "2022-05-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
  ];
  const scrollViewRef = useRef(null);
  const setInitValue = (requestType) => {
    count = dummy.filter(
      (request) => request.requestType === requestType
    ).length;
    return count;
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
      onPress: () => {
        travelCounter();
        scrollViewRef.current.scrollToEnd({ animated: true });
      },
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
      <ScrollView ref={scrollViewRef}>
        <View style={styles.savChild}>
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
        <View style={styles.savChild3}>
          <Text>Hassssssssdi333</Text>
        </View>
        <View style={styles.savChild2}>
          <AppText style={styles.penClaimTitle}>Pending Claims</AppText>
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={dummy}
            keyExtractor={(item) => item.id} 
            renderItem={({ item, index }) => {
              return (
                <AppListItem 
                  AttachmentComponent={
                    <AppAttachment
                      height={100}
                      image={require("../assets/Womanface.png")}
                      resizeMode="contain"
                      width={70}
                    />
                  }
                  title={dummy[index].Type}  
                  titleStyle={styles.title}
                  subTitle={dummy[index].date}
                  description1={
                    <AppText style={styles.desc1}>
                      Requested by: {dummy[index].name}
                    </AppText>
                  }
                  StatusComponent={
                    <AppCard
                      title={dummy[index].status}
                      containerStyle={styles.containerStyle}
                      titleStyle={{ fontSize: 13 }}
                    />
                  }
                  PostscriptComponent={
                    <AppText
                      style={{
                        fontWeight: "bold",
                        color: defaultStyles.colors.primary,
                        fontSize: 13,
                      }}
                    >
                      RM
                      {dummy[index].amount}.00
                    </AppText>
                  }
                />
              );
            }}
          />
          <AppListItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default PenReq;

const styles = StyleSheet.create({
  savParent: {
    backgroundColor: "blue",
    flex: 1,
  },
  savChild: {
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  savChild2: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  savChild3: {
    height: 900,
    backgroundColor: "yellow",
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
  titleContainer_Style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  containerStyle: {
    backgroundColor: defaultStyles.colors.secondary_red,
    width: null,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 40,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    elevation: null,
    marginTop: 7,
  },
  desc1: {
    fontSize: 12,
  },
  title: { fontSize: 12, fontWeight: "bold" },
  penClaimTitle:{fontWeight: "700",color: colors.primary}
  ,appList:{
    marginVertical: 5
  }
});
