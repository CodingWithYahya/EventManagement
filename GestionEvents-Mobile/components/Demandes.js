import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Demandes = ({ style }) => {
  return (
    <View style={[styles.demandes, style, styles.demandesFlexBox]}>
      <Image
        style={styles.chatIcon}
        contentFit="cover"
        source={require("../assets/chat-icon1.png")}
      />
      <Text style={[styles.demandes1, styles.demandesFlexBox]}>Demandes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  demandesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    width: 18,
    height: 18,
  },
  demandes1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_100,
    textAlign: "center",
    display: "flex",
    width: 58,
    height: 14,
    marginTop: 7,
  },
  demandes: {
    width: 50,
    height: 39,
  },
});

export default Demandes;
