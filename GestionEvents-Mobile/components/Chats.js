import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Chats = ({ style }) => {
  return (
    <View style={[styles.chats, style, styles.chatsFlexBox]}>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user-icon1.png")}
      />
      <Text style={[styles.profil, styles.chatsFlexBox]}>Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 16,
    height: 18,
  },
  profil: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_100,
    textAlign: "center",
    display: "flex",
    width: 28,
    height: 14,
    marginTop: 7,
  },
  chats: {
    width: 50,
  },
});

export default Chats;
