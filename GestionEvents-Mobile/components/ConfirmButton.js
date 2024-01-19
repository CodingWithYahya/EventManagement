import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ConfirmButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.messageButton, styles.timeParentFlexBox]}
      onPress={() => navigation.navigate("DetailsDemande")}
    >
      <View style={[styles.timeParent, styles.timeParentFlexBox]}>
        <Text style={styles.time}>Confirmer</Text>
        <Image
          style={styles.materialSymbolssendRoundedIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolssendrounded1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  time: {
    fontSize: FontSize.semiboldBodyButton_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorDarkorange,
    textAlign: "center",
  },
  materialSymbolssendRoundedIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  timeParent: {
    width: 101,
    justifyContent: "space-between",
  },
  messageButton: {
    marginTop: 21,
  },
});

export default ConfirmButton;
