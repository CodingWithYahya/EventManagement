import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { Border, Color, Padding } from "../GlobalStyles";

const DateFinInput = () => {
  const [dateFinDatePicker, setDateFinDatePicker] = useState(undefined);

  return (
    <View style={styles.input}>
      <View style={styles.inputArea}>
        <Image
          style={styles.dateRangeIcon}
          contentFit="cover"
          source={require("../assets/date-range1.png")}
        />
        <RNKDatepicker
          style={styles.dateFin}
          placeholder={() => (
            <Text style={styles.dateFinDatePickerPlaceHolder}>Date fin</Text>
          )}
          date={dateFinDatePicker}
          onSelect={setDateFinDatePicker}
          controlStyle={styles.dateFinDatePickerValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateFinDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#262626",
    fontSize: 14,
  },
  dateFinDatePickerValue: {},
  dateRangeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  dateFin: {
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

export default DateFinInput;
