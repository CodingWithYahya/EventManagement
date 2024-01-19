import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsDemandeTopHeader from "../components/DetailsDemandeTopHeader";
import DetailsDemandeSection from "../components/DetailsDemandeSection";
import { Color } from "../GlobalStyles";

const DetailsDemande = ({ route }) => {

  const selectedDemande = route.params ? route.params.selectedDemande : null;
  //const { selectedDemande } = route.params || {};
  console.log("Route params in DetailsDemande: ", route.params);

  return (
    <SafeAreaView style={styles.detailsDemande}>
      <DetailsDemandeTopHeader />
      <DetailsDemandeSection selectedDemande={selectedDemande} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsDemande: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default DetailsDemande;
