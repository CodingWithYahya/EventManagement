import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Assurez-vous d'importer AsyncStorage



const AddDemandeSection = ({ onClose }) => {
  const [dateDebutDatePicker, setDateDebutDatePicker] = useState("");
  const [dateFinDatePicker, setDateFinDatePicker] = useState("");

  const navigation = useNavigation();
  const [demande, setDemande] = useState({
    titre: "",
    description: "",
    dateDebut: "2024-10-10",
    dateFin: "2024-10-10",
    budget: "",
    type: "",
    etat: "pending",
    local: "",
    effectif: "",
    moyendetransport: false,
    comiteOrganisation: {
      id: 1,
      nombreDePersonnes: 2,
      users: [
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
  });

  const handleConfirm = async () => {
    console.log("Demande avant envoi :", demande);

    try {
      // Récupérez l'id de l'utilisateur connecté
      const userDataString = await AsyncStorage.getItem("user");
      const userId = JSON.parse(userDataString)?.id;
      console.log("Réponse de la demande :", response.data);

      if (userId) {
        // Ajoutez l'id de l'utilisateur à la demande
        const demandeAEnvoyer = {
          ...demande,
          user: { id: userId },
        };

        // Effectuez une requête POST vers l'API
        const response = await axios.post(
          "http://192.168.1.104:8080/gestion_events/demande/add",
          demandeAEnvoyer
        );

        // Gérez la réponse ou effectuez d'autres actions nécessaires
        console.log("Réponse de la demande :", response.data);
        console.log("Nouvelle demande créée avec succès:", response.data);
        // Fermez la modal ou effectuez d'autres actions nécessaires
        onClose();
      }
    } catch (error) {
      console.error("Erreur lors de la création de la demande:", error);
    }
  };

  const handleChange = (field, value) => {
    setDemande((prevDemande) => ({ ...prevDemande, [field]: value }));
  };


  return (
    <ScrollView
      style={styles.addDemandeSection}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.addDemandeSectionContent}
    >
      <View style={styles.newDemande}>
        <Text style={styles.crerUneDemande}>Créer une demande</Text>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/class1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Titre de la demande"
              placeholderTextColor="#a4a4a4"
              value={demande.titre}
              onChangeText={(text) => handleChange("titre", text)}
            />
          </View>
        </View>
        <View style={[styles.input1, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/insert-comment1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Description"
              placeholderTextColor="#a4a4a4"
              value={demande.description}
              onChangeText={(text) => handleChange("description", text)}
            />
          </View>
        </View>
        <View style={[styles.input2, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/date-range1.png")}
            />
            <RNKDatepicker
              style={styles.dateDebut}
              placeholder={() => (
                <Text style={styles.dateDebutDatePickerPlaceHolder}>
                  Date début
                </Text>
              )}
              date={dateDebutDatePicker}
              onSelect={(date) => setDateDebutDatePicker(date)}
              status="basic"
              controlStyle={styles.dateDebutDatePickerValue}
            />
          </View>
        </View>
        <View style={[styles.input3, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/date-range1.png")}
            />
            <RNKDatepicker
              style={styles.dateDebut}
              placeholder={() => (
                <Text style={styles.dateFinDatePickerPlaceHolder}>
                  Date fin
                </Text>
              )}
              date={dateFinDatePicker}
              onSelect={(date) => setDateFinDatePicker(date)}
              controlStyle={styles.dateFinDatePickerValue}
            />
          </View>
        </View>
        <View style={[styles.input4, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/attach-money1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Budget"
              keyboardType="default"
              placeholderTextColor="#a4a4a4"
              value={demande.budget}
              onChangeText={(text) => handleChange("budget", text)}
            />
          </View>
        </View>
        <View style={[styles.input5, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/filter-alt1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Type"
              keyboardType="default"
              placeholderTextColor="#a4a4a4"
              value={demande.type}
              onChangeText={(text) => handleChange("type", text)}
            />
          </View>
        </View>
        <View style={[styles.input6, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/insert-comment1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Local"
              placeholderTextColor="#a4a4a4"
              value={demande.local}
              onChangeText={(text) => handleChange("local", text)}
            />
          </View>
        </View>
        <View style={[styles.input7, styles.inputSpaceBlock]}>
          <View style={[styles.inputArea, styles.inputAreaFlexBox]}>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/insert-comment1.png")}
            />
            <TextInput
              style={[styles.titreDeLa, styles.timeTypo]}
              placeholder="Effectif"
              placeholderTextColor="#a4a4a4"
              value={demande.effectif}
              onChangeText={(text) => handleChange("effectif", text)}
            />
          </View>
        </View>
        <Pressable
          style={[styles.messageButton, styles.inputSpaceBlock]}
          onPress={() => {
            handleConfirm(demande);
          }}
        //onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <View style={[styles.timeParent, styles.inputAreaFlexBox]}>
            <Text style={[styles.time, styles.timeTypo]}>Confirmer</Text>
            <Image
              style={styles.classIcon}
              contentFit="cover"
              source={require("../assets/materialsymbolssendrounded1.png")}
            />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dateDebutDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#262626",
    fontSize: 14,
  },
  dateDebutDatePickerValue: {},
  dateFinDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#262626",
    fontSize: 14,
  },
  dateFinDatePickerValue: {},
  addDemandeSectionContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputSpaceBlock: {
    marginTop: 15,
    flexDirection: "row",
  },
  inputAreaFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  crerUneDemande: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.gray800,
    textAlign: "center",
  },
  classIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  titreDeLa: {
    fontSize: FontSize.size_sm,
    marginLeft: 22,
    flex: 1,
  },
  inputArea: {
    flex: 1,
  },
  input: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input1: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  dateDebut: {
    marginLeft: 22,
  },
  input2: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input3: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input4: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input5: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input6: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  input7: {
    paddingVertical: Padding.p_mid,
    width: 313,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    marginTop: 15,
    paddingHorizontal: Padding.p_xl,
  },
  time: {
    fontSize: FontSize.semiboldBodyButton_size,
    color: Color.colorDarkorange,
    textAlign: "center",
  },
  timeParent: {
    width: 101,
    justifyContent: "space-between",
  },
  messageButton: {
    marginTop: 15,
    alignItems: "center",
  },
  newDemande: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 383,
    paddingVertical: Padding.p_6xl,
    maxWidth: "100%",
    maxHeight: "100%",
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  addDemandeSection: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
});

export default AddDemandeSection;
