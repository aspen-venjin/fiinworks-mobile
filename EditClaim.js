import { View, StyleSheet, ScrollView } from "react-native";
import { useState, createRef } from "react";
import React from "react";
import * as Yup from "yup";
import { useRef } from "react";
import defaultStyles from "./config/styles";
import Screen from "./components/Screen";
import AppLogo from "./components/AppLogo";
import AppText from "./components/AppText";
import AppCard from "./components/AppCard";
import AppAttachment from "./components/AppAttachment";
import AppFormField from "./components/forms/AppFormField";
import AppField from "./components/AppField";
import AppForm from "./components/forms/AppForm";
import AppCalendar from "./components/AppCalendar";

import { sampleClaims } from "./config/data";

const validationSchema = Yup.object().shape({
  amount: Yup.string().min(3).label("Amount"),
  entity: Yup.string().min(3).label("Entity"),
  project_code: Yup.string().min(10).max(10).label("Project Code"),
  site: Yup.string().min(6).label("Site"),
  vendor: Yup.string().min(3).label("Invoice Number"),
  invoice_no: Yup.string().min(3).label("Invoice No"),
  purpose: Yup.string().min(10).label("Purpose"),
  reason: Yup.string().min(10).label("Reason"),
});

export default function EditClaim() {
  const amountInput = useRef();
  const entityInput = useRef();
  const projectCodeInput = useRef();
  const siteInput = useRef();
  const vendorInput = useRef();
  const invoiceNoInput = useRef();
  const purposeInput = useRef();
  const reasonInput = useRef();

  const [invoiceDate, editInvoiceDate] = useState(sampleClaims[0].invoice_date);
  const [submittedDate, editSubmittedDate] = useState(sampleClaims[0].submission_date);


  return (
    <Screen>
      <AppLogo style={styles.logo} />
      <ScrollView>
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
              #C{sampleClaims[1].claim_id}
            </AppText>
            <AppText
              style={{
                fontWeight: "bold",
                color: defaultStyles.colors.primary,
                fontSize: 14,
              }}
            >
              Claim Type: {sampleClaims[1].claim_type}
            </AppText>
          </View>

          <View style={styles.status}>
            <AppCard
              title={sampleClaims[1].status}
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
                width: null,
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 40,
                shadowColor: null,
                shadowOffset: null,
                shadowOpacity: null,
                shadowRadius: null,
                elevation: null,
              }}
            />
          </View>
        </View>

        <View style={styles.attachment}>
          <AppAttachment
            image={require("./assets/random.png")}
            width={250}
            height={400}
          />
        </View>
        <AppForm
          initialValues={{
            amount: "",
            entity: "",
            project_code: "",
            site: "",
            vendor: "",
            invoice_no: "",
            purpose: "",
          }}
          validationSchema={validationSchema}
        >
          <AppField
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              marginLeft: 15,
            }}
            title="Amount"
            componentStyle={{ borderBottomWidth: null }}
            AppComponent={
              <AppFormField
                containerStyle={{ marginVertical: null }}
                textStyle={styles.separateTextInput}
                name="amount"
                ref={amountInput}
              />
            }
          />

          <View style={styles.separator}></View>

          <View style={styles.container}>
            <AppField
              title="Entity"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="entity"
                  ref={entityInput}
                />
              }
            />

            <AppField
              title="Project Code"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="project code"
                  ref={projectCodeInput}
                />
              }
            />


            <AppField
              title="Site"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="site"
                  ref={siteInput}
                />
              }
            />
            <AppField
              title="Vendor"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="vendor"
                  ref={vendorInput}
                />
              }
            />
            <AppField
              title="Invoice No."
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="invoice no"
                  ref={invoiceNoInput}
                />
              }
            />

            <AppField
              title="Invoice Date"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppCalendar textStyle={{fontSize: 15}} date={invoiceDate} setDate={editInvoiceDate} />
              }
            />

            <AppField
              title="Submitted Date"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomColor: defaultStyles.colors.tertiary_grey,
              }}
              AppComponent={
                <AppCalendar textStyle={{fontSize: 15}} date={submittedDate} setDate={editSubmittedDate} />
              }
            />
            <AppField
              title="Purpose/Description"
              textStyle={{
                color: defaultStyles.colors.secondary_grey,
                fontSize: 12,
              }}
              containerStyle={{ marginBottom: 10 }}
              componentStyle={{
                borderBottomWidth: null,
              }}
              AppComponent={
                <AppFormField
                  containerStyle={{ marginVertical: null }}
                  textStyle={styles.textInput}
                  name="purpose"
                  ref={purposeInput}
                />
              }
            />
          </View>
          <View style={styles.separator}></View>

          <AppField
            title="Reason for Rejection"
            textStyle={{
              color: defaultStyles.colors.secondary_grey,
              fontSize: 12,
              marginLeft: 15,
            }}
            containerStyle={{ marginBottom: 10 }}
            componentStyle={{
              borderBottomWidth: null,
            }}
            AppComponent={
              <AppFormField
                containerStyle={{ marginVertical: null }}
                textStyle={styles.separateTextInput}
                name="reason"
                ref={reasonInput}
              />
            }
          />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  title: {
    marginTop: 10,
  },

  status: {
    justifyContent: "center",
  },

  attachment: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  textInput: {
    marginLeft: null,
    fontWeight: 'bold',
    color: defaultStyles.colors.primary
  },

  separateTextInput: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: defaultStyles.colors.primary
  },

  inputTitle: {
    color: defaultStyles.colors.secondary_grey,
    fontWeight: "medium",
    fontSize: 12,
    alignSelf: "flex-start",
  },

  amountTitle: {
    color: defaultStyles.colors.secondary_grey,
    fontWeight: "medium",
    fontSize: 12,
    alignSelf: "flex-start",
    marginHorizontal: 15,
  },
  calendarContainer: {
    borderBottomColor: defaultStyles.colors.tertiary_grey,
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 4,
  },

  separator: {
    backgroundColor: defaultStyles.colors.primary,
    opacity: 0.45,
    height: 10,
    marginVertical: 10,
  },

  input: {
    borderBottomColor: defaultStyles.colors.tertiary_grey,
    borderBottomWidth: 2,
  },
});
