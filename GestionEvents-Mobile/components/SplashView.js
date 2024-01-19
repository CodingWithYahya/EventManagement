import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SplashView = () => {
  return (
    <View style={[styles.splashView, styles.splashViewFlexBox]}>
      <View style={styles.venthubParent}>
        <Text style={styles.venthub}>
          <Text style={styles.vent}>vent</Text>
          <Text style={styles.hub}>Hub</Text>
        </Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <View style={styles.splashViewFlexBox}>
        <Text style={styles.loading}>Loading ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashViewFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  vent: {
    color: Color.colorRosybrown,
  },
  hub: {
    color: Color.colorDarkslateblue,
  },
  venthub: {
    top: 0,
    left: 58,
    fontSize: FontSize.size_26xl,
    lineHeight: 62,
    fontFamily: FontFamily.amaranthRegular,
    textAlign: "left",
    width: 186,
    position: "absolute",
    height: 58,
  },
  groupIcon: {
    height: "100%",
    width: "22.91%",
    top: "0%",
    right: "77.09%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  venthubParent: {
    width: 251,
    height: 58,
  },
  loading: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkorange,
    textAlign: "center",
  },
  splashView: {
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    height: 511,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_81xl,
  },
});

export default SplashView;
