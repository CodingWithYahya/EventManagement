import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profil = ({ style }) => {
  return (
    <View style={[styles.profil, style, styles.profilFlexBox]}>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user-icon2.png")}
      />
      <Text style={[styles.profil1, styles.profilFlexBox]}>Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 16,
    height: 18,
  },
  profil1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkorange,
    textAlign: "center",
    display: "flex",
    width: 28,
    height: 14,
    marginTop: 7,
  },
  profil: {
    width: 50,
  },
});

export default Profil;
