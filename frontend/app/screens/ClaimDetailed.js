import { ScrollView, StyleSheet, StatusBar, View } from "react-native";
import Screen from "./components/Screen";
import AppField from "./components/AppField";
import AppLogo from "./components/AppLogo";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import AppCard from "./components/AppCard";
import AppAttachment from "./components/AppAttachment";
import AppCalendar from "./components/AppCalendar";
import defaultStyles from "./config/styles";
import React, { useState } from "react";

import { sampleClaims } from "./config/data";

export default function App() {
  const [invoiceDate, editInvoiceDate] = useState(sampleClaims[0].invoice_date);
  const [submittedDate, editSubmittedDate] = useState(
    sampleClaims[0].submission_date
  );

  return (
    <ScrollView>
      <Screen>
        <AppLogo style={styles.logo} />

        <View style={styles.header}>
          <View style={styles.title}>
            <AppText
              style={{
                fontWeight: "bold",
                color: defaultStyles.colors.primary,
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              #C{sampleClaims[0].claim_id}
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                color: defaultStyles.colors.primary,
                fontSize: 14,
              }}
            >
              Claim Type: {sampleClaims[0].claim_type}
            </AppText>
          </View>

          {/* Rejected/Pending status container */}
          <View style={styles.status}>
            <AppCard
              title={sampleClaims[0].status}
              titleStyle={{
                fontSize: 14,
              }}
              containerStyle={{
                backgroundColor:
                  sampleClaims[0].status === "pending"
                    ? defaultStyles.colors.secondary_yellow
                    : sampleClaims[0].status === "rejected"
                    ? defaultStyles.colors.secondary_red
                    : defaultStyles.colors.white,
                paddingVertical: 5,
                paddingHorizontal: 20,
                height: 30,
                width: 100,
                borderRadius: 20,
                shadowColor: null,
                shadowOffset: null,
                shadowOpacity: null,
                shadowRadius: null,
                elevation: null,
              }}
            />
          </View>
        </View>
        {/* Receipt attachment container  */}
        <View style={styles.container}>
          <AppAttachment
            image={require("./assets/random.png")}
            width={250}
            height={400}
          />
        </View>

        <AppField
          title="Amount"
          textStyle={{
            color: defaultStyles.colors.secondary_grey,
            fontSize: 12,
            marginLeft: 15,
          }}
          componentStyle={{ borderBottomWidth: null }}
          AppComponent={
            <AppText style={styles.separateDetails}>
              RM {sampleClaims[0].amount}
            </AppText>
          }
        />

        <View style={styles.separator}></View>

        <View style={styles.form}>
          <AppField
            title="Entity"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={<AppText style={styles.details}>Entity</AppText>}
          />

          <AppField
            title="Project Code"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={
              <AppText style={styles.details}>Project Code</AppText>
            }
          />

          <AppField
            title="Site"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={<AppText style={styles.details}>Site</AppText>}
          />

          <AppField
            title="Vendor"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={<AppText style={styles.details}>Vendor</AppText>}
          />

          <AppField
            title="Invoice No."
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={<AppText style={styles.details}>Invoice No.</AppText>}
          />

          <AppField
            title="Invoice Date"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={
              <AppCalendar
                textStyle={{ fontSize: 15 }}
                date={invoiceDate}
                setDate={editInvoiceDate}
              />
            }
          />

          <AppField
            title="Submitted Date"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{
              borderBottomColor: defaultStyles.colors.tertiary_grey,
            }}
            AppComponent={
              <AppCalendar
                textStyle={{ fontSize: 15 }}
                date={submittedDate}
                setDate={editSubmittedDate}
              />
            }
          />

          <AppField
            title="Purpose/Description"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              paddingTop: 10,
            }}
            componentStyle={{ borderBottomWidth: null }}
            AppComponent={<AppText style={styles.details}>Purpose</AppText>}
          />
        </View>

        <View style={styles.separator}></View>

        <AppField
          title="Reason for Rejection"
          textStyle={{
            color: defaultStyles.colors.secondary_grey,
            fontSize: 12,
            marginLeft: 15,
            paddingTop: 10,
          }}
          containerStyle={{ marginBottom: 10 }}
          componentStyle={{
            borderBottomWidth: null,
          }}
          AppComponent={
            <AppText style={styles.separateDetails}>Rejected</AppText>
          }
        />

        <AppButton style= {styles.button} color = "pink" title="Edit" />
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    marginRight: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  title: {
    marginTop: 10,
  },

  inputTitle: {
    color: defaultStyles.colors.secondary_grey,
    fontWeight: "medium",
    fontSize: 13,
  },

  details: {
    color: defaultStyles.colors.primary,
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 15,
  },

  separateDetails: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    color: defaultStyles.colors.primary,
  },

  status: {
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    marginVertical: 15,
  },

  form: {
    marginTop: 10,
    marginHorizontal: 15,
  },

  separator: {
    backgroundColor: defaultStyles.colors.primary,
    opacity: 0.45,
    height: 10,
    marginVertical: 5,
  },

  amountContainer: {
    marginHorizontal: 15,
  },

  detailContainer: {
    borderBottomColor: defaultStyles.colors.tertiary_grey,
    borderBottomWidth: 2,
    marginBottom: 7,
  },

  reasonContainer: {
    marginHorizontal: 15,
  },

  button: {
    width: "22%",
    alignSelf: "flex-end",
    borderColor: null,
    borderWidth: null,
    marginBottom: 10,
    marginRight: 10,
  },
});
