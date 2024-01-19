import * as React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AddDemandeSection from "../components/AddDemandeSection";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const AddDemande = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.addDemande}>
      <View style={styles.topHeader}>
        <View style={[styles.backButtonParent, styles.userFlexBox]}>
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
          <View style={[styles.user, styles.userFlexBox]}>
            <View>
              <Text style={styles.ajouterNouvelleDemande}>
                Ajouter Nouvelle Demande
              </Text>
            </View>
          </View>
        </View>
      </View>
      <AddDemandeSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  ajouterNouvelleDemande: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray800,
    textAlign: "left",
  },
  user: {
    marginLeft: 26,
  },
  backButtonParent: {
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
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  topHeader: {
    alignSelf: "stretch",
  },
  addDemande: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AddDemande;
