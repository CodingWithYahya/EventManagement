import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";

const DetailsDemandeTopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topHeader}>
      <View style={styles.backButtonParent}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.user}>
          <View>
            <Text style={[styles.nouvelleDemande, styles.descriptionTypo]}>
              Nouvelle Demande
            </Text>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Description
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray50,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  nouvelleDemande: {
    fontSize: FontSize.size_sm,
    color: Color.gray800,
    width: 119,
  },
  description: {
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkorange,
    marginTop: 4,
  },
  user: {
    alignItems: "center",
    marginLeft: 26,
    flexDirection: "row",
  },
  backButtonParent: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  topHeader: {
    alignSelf: "stretch",
  },
});

export default DetailsDemandeTopHeader;
