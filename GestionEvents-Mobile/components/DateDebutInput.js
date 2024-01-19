import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { Border, Color, Padding } from "../GlobalStyles";

const DateDebutInput = () => {
  const [dateDebutDatePicker, setDateDebutDatePicker] = useState(undefined);

  return (
    <View style={styles.input}>
      <View style={styles.inputArea}>
        <Image
          style={styles.dateRangeIcon}
          contentFit="cover"
          source={require("../assets/date-range1.png")}
        />
        <RNKDatepicker
          style={styles.dateDebut}
          placeholder={() => (
            <Text style={styles.dateDebutDatePickerPlaceHolder}>
              Date debut
            </Text>
          )}
          date={dateDebutDatePicker}
          onSelect={setDateDebutDatePicker}
          status="basic"
          controlStyle={styles.dateDebutDatePickerValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateDebutDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#262626",
    fontSize: 14,
  },
  dateDebutDatePickerValue: {},
  dateRangeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  dateDebut: {
    marginLeft: 22,
  },
  inputArea: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 313,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mid,
    marginTop: 21,
    flexDirection: "row",
  },
});

export default DateDebutInput;
