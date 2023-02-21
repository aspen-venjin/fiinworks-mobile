import React from "react";
import { useRef } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import AppCard from "./components/AppCard";
import AppListItem from "./components/AppListItem";
import Screen from "./components/Screen";
import defaultStyles from "./config/styles";
import AppText from "./components/AppText";

const listData = [
  {
    id: 1,
    title: "Petrol Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 2,
    title: "Petrol Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Pending",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_yellow,
  },

  {
    id: 3,
    title: "Medical Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Pending",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_yellow,
  },

  {
    id: 4,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 5,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 6,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 7,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 8,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 9,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 10,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 11,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 12,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 13,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 14,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },

  {
    id: 15,
    title: "Parking Claim",
    subtitle: "6 July 2022",
    description1: "Project Code",
    status: "Rejected",
    price: "RM 100",
    image: require("./assets/random.png"),
    cardColor: defaultStyles.colors.secondary_red,
  },
];

export default function App() {
  const [pendingClaims, setPendingClaims] = useState(0);
  const [rejectedClaims, setRejectedClaims] = useState(0);
  const listDataRef = useRef();

  const [data, setData] = useState(listData.slice(0, 5));

  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      const newData = listData.slice(data.length, data.length + 5);
      setData([...data, ...newData]);
      setLoadingMore(false);
      console.log("Loaded more data:", newData);
    }
  };

  useEffect(() => {
    // Count Pending Claims
    const pendingClaims = listData.filter(
      (claim) => claim.status === "Pending"
    );
    const pendingClaimsCount = pendingClaims.length;
    console.log(`The number of pending claims is: ${pendingClaimsCount}`);

    // Count Rejected Claims
    const rejectedClaims = listData.filter(
      (claim) => claim.status === "Rejected"
    );
    const rejectedClaimsCount = rejectedClaims.length;
    console.log(`The number of rejected claims is: ${rejectedClaimsCount}`);

    setPendingClaims(pendingClaimsCount);
    setRejectedClaims(rejectedClaimsCount);
  }, [listData]);

  const handleCardPress = () => {
    if (listDataRef && listDataRef.current) {
      listDataRef.current.scrollToOffset({ animated: true, offset: 300 });
    }
    console.log("Card pressed");
  };

  const cardData = [
    {
      id: 1,
      title: pendingClaims,
      subtitle: `Pending ${"\n"}Claims`,
      icon: "clipboard-clock-outline",
      containerColor: defaultStyles.colors.secondary_yellow,
      titleSize: 30,
      subtitleSize: 16,
    },

    {
      id: 2,
      title: rejectedClaims,
      subtitle: `Rejected ${"\n"}Claims`,
      icon: "clipboard-off-outline",
      containerColor: defaultStyles.colors.secondary_red,
      titleSize: 30,
      subtitleSize: 16,
    },
  ];

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={
          <>
            <TouchableWithoutFeedback onPress={handleCardPress}>
              <FlatList
                data={cardData}
                keyExtractor={(card) => card.id.toString()}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                renderItem={({ item }) => (
                  <AppCard
                    title={item.title}
                    subTitle={item.subtitle}
                    icon={item.icon}
                    containerStyle={{ backgroundColor: item.containerColor }}
                    titleStyle={{ fontSize: item.titleSize }}
                    subtitleStyle={{ fontSize: item.subtitleSize }}
                  />
                )}
              />
            </TouchableWithoutFeedback>
            <View style={{ height: 200 }}></View>
          </>
        }
        data={listData}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        initialNumToRender={20}
        ref={listDataRef}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.subtitle}
            description1={item.description1}
            titleStyle={{ fontWeight: "bold", fontSize: 17 }}
            attachment={item.image}
            StatusComponent={
              <AppCard
                title={item.status}
                containerStyle={{
                  backgroundColor: item.cardColor,
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
                }}
                titleStyle={{ fontSize: 13 }}
              />
            }
            PostscriptComponent={
              <AppText
                style={{
                  fontWeight: "bold",
                  color: defaultStyles.colors.primary,
                }}
              >
                RM100.00
              </AppText>
            }
          />
        )}
        ListFooterComponent={<ActivityIndicator></ActivityIndicator>}
      />
    </Screen>
  );
}
