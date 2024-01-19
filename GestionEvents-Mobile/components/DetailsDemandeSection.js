import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import InnerDetailsSection from "./InnerDetailsSection";

const DetailsDemandeSection = ({ selectedDemande  }) => {
  return (
    <ScrollView
      style={styles.detailsDemandeSection}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.detailsDemandeSectionContent}
    >
      <InnerDetailsSection selectedDemande={selectedDemande} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsDemandeSectionContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsDemandeSection: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
  },
});

export default DetailsDemandeSection;
