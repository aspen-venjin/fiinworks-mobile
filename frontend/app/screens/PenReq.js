<<<<<<< HEAD
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
=======
import React, { useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
>>>>>>> c07b2ce (2)
import AppCard from "../components/AppCard";
import defaultStyles from "../config/styles";
<<<<<<< HEAD
import AppListItem from "../components/AppListItem";
import AppAttachment from "../components/AppAttachment";
import AppText from "../components/AppText";
import colors from "../config/colors";

function PenReq() {
  const dummy = [
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
    {
      id: 6,
      name: "David Lee",
      requestType: "travel",
      destination: "San Francisco",
      amount: 400,
      date: "2022-06-01",
      department: "Finance",
      status: "Approved",
      Type: "Travel Requisition",
    },
    {
      id: 7,
      name: "Emily Chen",
      requestType: "claim",
      amount: 1200,
      date: "2022-07-01",
      department: "Marketing",
      status: "Pending",
      Type: "Hotel Claim",
    },
    {
      id: 8,
      name: "Lucas Kim",
      requestType: "travel",
      destination: "Tokyo",
      amount: 800,
      date: "2022-08-01",
      department: "Sales",
      status: "Pending",
      Type: "Travel Requisition",
    },
    {
      id: 9,
      name: "Samantha Lee",
      requestType: "claim",
      amount: 900,
      date: "2022-09-01",
      department: "Finance",
      status: "Approved",
      Type: "Hotel Claim",
    },
    {
      id: 10,
      name: "Michael Nguyen",
      requestType: "travel",
      destination: "Singapore",
      amount: 600,
      date: "2022-10-01",
      department: "IT",
      status: "Approved",
      Type: "Travel Requisition",
    },
    {
      id: 11,
      name: "Hannah Kim",
      requestType: "claim",
      amount: 1800,
      date: "2022-11-01",
      department: "Sales",
      status: "Pending",
      Type: "Meal Claim",
    },
    {
      id: 12,
      name: "Grace Park",
      requestType: "",
      amount: 400,
      date: "2022-11-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
    {
      id: 13,
      name: "Isabella Lee",
      requestType: "travel",
      destination: "Paris",
      amount: 600,
      date: "2022-12-01",
      department: "IT",
      status: "Pending",
      Type: "Travel Requisition",
    },
    {
      id: 14,
      name: "Liam Wong",
      requestType: "claim",
      amount: 800,
      date: "2023-01-01",
      department: "Human Resource",
      status: "Approved",
      Type: "Petrol Claim",
    },
    {
      id: 15,
      name: "Noah Chen",
      requestType: "travel",
      destination: "Tokyo",
      amount: 1000,
      date: "2023-02-01",
      department: "IT",
      status: "Rejected",
      Type: "Travel Requisition",
    },
    {
      id: 16,
      name: "Sophia Yang",
      requestType: "claim",
      amount: 1200,
      date: "2023-03-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
    {
      id: 17,
      name: "Mia Zhang",
      requestType: "travel",
      destination: "Rome",
      amount: 800,
      date: "2023-04-01",
      department: "Marketing",
      status: "Approved",
      Type: "Travel Requisition",
    },
    {
      id: 18,
      name: "Ethan Liu",
      requestType: "claim",
      amount: 900,
      date: "2023-05-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
    {
      id: 19,
      name: "Ava Chen",
      requestType: "travel",
      destination: "Singapore",
      amount: 1500,
      date: "2023-06-01",
      department: "IT",
      status: "Pending",
      Type: "Travel Requisition",
    },
    {
      id: 20,
      name: "William Li",
      requestType: "claim",
      amount: 500,
      date: "2023-07-01",
      department: "Human Resource",
      status: "Rejected",
      Type: "Petrol Claim",
    },
    {
      id: 21,
      name: "Amelia Zhou",
      requestType: "travel",
      destination: "Barcelona",
      amount: 1000,
      date: "2023-08-01",
      department: "Marketing",
      status: "Pending",
      Type: "Travel Requisition",
    },
    {
      id: 22,
      name: "Benjamin Liu",
      requestType: "claim",
      amount: 2000,
      date: "2023-09-01",
      department: "Sales",
      status: "Pending",
      Type: "Petrol Claim",
    },
  ];
  const [data, setData] = useState(dummy.slice(0, 5));
  const [isLoading, setIsLoading] = useState(false);
  const setInitValue = (requestType) => {
    let count = dummy.filter(
      (request) => request.requestType === requestType
    ).length;
    return count;
  };
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = dummy.slice(data.length, data.length + 5);
      setData([...data, ...newData]);
      setIsLoading(false);
    }, 500);
  };
  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <AppText style={styles.loading}>Loading...</AppText>
        <ActivityIndicator />
      </View>
    ) : null;
  };
  const scrollRef = useRef();
=======

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
>>>>>>> c07b2ce (2)
  const [req, setReq] = useState({
    claim: setInitValue("claim"),
    travel: setInitValue("travel"),
  });
<<<<<<< HEAD
  const onPressTouch = () => {
    scrollRef.current.scrollToEnd({
      y: 0,
      animated: true,
    });
  };
=======
>>>>>>> c07b2ce (2)
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
<<<<<<< HEAD
      onPress: () => {
        travelCounter();
        onPressTouch();
      },
=======
      onPress: () => travelCounter(),
>>>>>>> c07b2ce (2)
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
<<<<<<< HEAD
      <FlatList
        contentContainerStyle={styles.container}
        ref={scrollRef}
        data={data}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
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
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.savChild3}>
              <Text>Hassssssssdi333</Text>
            </View>
            <View style={styles.savChild2}>
              <AppText style={styles.penClaimTitle}>Pending Claims</AppText>
            </View>
          </>
        }
        ListFooterComponent={renderFooter}
        renderItem={({ index }) => {
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
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
=======
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
>>>>>>> c07b2ce (2)
    </SafeAreaView>
  );
}
export default PenReq;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  savChild: {
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
<<<<<<< HEAD
=======
  titleStyle: {},
>>>>>>> c07b2ce (2)
  titleContainer_Style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
<<<<<<< HEAD
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
  penClaimTitle: { fontWeight: "700", color: colors.primary },
  appList: {
    marginVertical: 5,
  },
  loading: {
    textAlign: "center",
    marginVertical: 5,
  },
  loader: {
    paddingVertical: 15,
=======
>>>>>>> c07b2ce (2)
  },
});
