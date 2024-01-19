import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import TitreDemandeInput from "./TitreDemandeInput";
import DescriptionInput from "./DescriptionInput";
import BudgetInput from "./BudgetInput";
import TypeInput from "./TypeInput";
import DateDebutInput from "./DateDebutInput";
import DateFinInput from "./DateFinInput";
import ConfirmButton from "./ConfirmButton";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const NewDemande = ({ onClose }) => {
  return (
    <View style={styles.newDemande}>
      <Text style={styles.crerUneDemande}>Créer une demande</Text>
      <TitreDemandeInput />
      <DescriptionInput />
      <BudgetInput />
      <TypeInput />
      <DateDebutInput />
      <DateFinInput />
      <ConfirmButton />
    </View>
  );
};

const styles = StyleSheet.create({
  crerUneDemande: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.gray800,
    textAlign: "center",
  },
  newDemande: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 383,
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_6xl,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default NewDemande;
