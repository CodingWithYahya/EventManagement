import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Contacts = ({ style }) => {
  return (
    <View style={[styles.contacts, style, styles.contactsFlexBox]}>
      <Image
        style={styles.chatIcon}
        contentFit="cover"
        source={require("../assets/chat-icon2.png")}
      />
      <Text style={[styles.demandes, styles.contactsFlexBox]}>Demandes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    width: 18,
    height: 18,
  },
  demandes: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkorange,
    textAlign: "center",
    display: "flex",
    width: 58,
    height: 14,
    marginTop: 7,
  },
  contacts: {
    width: 50,
  },
});

export default Contacts;
