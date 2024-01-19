import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const InnerDetailsSection = ({ selectedDemande }) => {
  const navigation = useNavigation();
  const renderUsers = (users) => {
    return users.map((user) => (
      <Text key={user.id}>{`            Nom : ${user.nom}\n         Prenom : ${user.prenom}\n    Email: ${user.email}`}</Text>
    ));
  };

  return (
    <Pressable style={[styles.detailssection, styles.detailssectionFlexBox]}>
      <View style={[styles.profile, styles.chatFlexBox]}>
        <View style={[styles.chat, styles.chatFlexBox]}>
            <Text style={styles.titredemande}>
              Titre de la demande : {selectedDemande?.titre || "N/A"}
            </Text>
            <Text style={styles.titredemande}>
              Description de la demande : {selectedDemande?.description || "N/A"}
            </Text>
            <Text style={styles.titredemande}>Date debut : {selectedDemande?.dateDebut || "N/A"}</Text>
            <Text style={styles.titredemande}>Date fin : {selectedDemande?.dateFin || "N/A"}</Text>
            <Text style={styles.titredemande}>Budget : {selectedDemande?.budget || "N/A"}</Text>
            <Text style={styles.titredemande}>Type : {selectedDemande?.type || "N/A"}</Text>
            <Text style={styles.titredemande}>Etat : {selectedDemande?.etat || "N/A"}</Text>

            <Text style={styles.titredemande}>
              Comité Organisation : {selectedDemande?.comiteOrganisation?.nombreDePersonnes || "N/A"}
            </Text>
            <Text style={styles.titredemande}>
              Utilisateurs dans le comité :{" "}
            </Text>
            {selectedDemande?.comiteOrganisation?.users &&
              renderUsers(selectedDemande.comiteOrganisation.users)}


          </View>
          <View style={[styles.editbuttonParent, styles.detailssectionFlexBox]}>
          
          { /* */ }
          <View style={styles.editbutton}>
            <View style={styles.bg}>
              <View style={[styles.bgChild, styles.bgItemLayout]} />
            </View>
            <View style={[styles.text, styles.textPosition]}>
              <Text style={[styles.edit, styles.textPosition]}>EDIT</Text>
            </View>
          </View>
          <View style={styles.editbutton}>
            <View style={styles.bg}>
              <Pressable
                style={[styles.bgItem, styles.bgItemLayout]}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "" })
                }
              />
            </View>
            <View style={[styles.text, styles.textPosition]}>
              <Text style={[styles.edit, styles.textPosition]}>DELETE</Text>
            </View>
          </View>
          { /* */ }
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  detailssectionFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatFlexBox: {
    paddingHorizontal: 0,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bgItemLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
    height: 37,
    width: 96,
  },
  textPosition: {
    height: 14,
    width: 53,
    left: "50%",
    top: "50%",
    marginLeft: -26.5,
    position: "absolute",
  },
  titredemande: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray800,
    textAlign: "center",
  },
  chat: {
    height: 243,
    paddingVertical: Padding.p_8xs,
  },
  bgChild: {
    backgroundColor: Color.colorGray_200,
  },
  bg: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 37,
    width: 96,
  },
  edit: {
    marginTop: -6.85,
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: 14,
    width: 53,
    left: "50%",
    top: "50%",
    marginLeft: -26.5,
  },
  text: {
    marginTop: -6.3,
  },
  editbutton: {
    height: 37,
    width: 96,
  },
  bgItem: {
    backgroundColor: Color.colorRed,
  },
  editbuttonParent: {
    width: 241,
    flexDirection: "row",
  },
  profile: {
    flex: 1,
    paddingVertical: Padding.p_3xs,
  },
  detailssection: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderBottomWidth: 1,
    height: 366,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
});

export default InnerDetailsSection;
