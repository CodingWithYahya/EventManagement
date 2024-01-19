import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const BudgetInput = () => {
  return (
    <View style={styles.input}>
      <View style={styles.inputArea}>
        <Image
          style={styles.attachMoneyIcon}
          contentFit="cover"
          source={require("../assets/attach-money1.png")}
        />
        <TextInput
          style={styles.budget}
          placeholder="Budget"
          keyboardType="default"
          placeholderTextColor="#a4a4a4"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attachMoneyIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  budget: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    marginLeft: 22,
    flex: 1,
  },
  inputArea: {
    alignItems: "center",
    flex: 1,
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

export default BudgetInput;
