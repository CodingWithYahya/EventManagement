import React, { useState, useCallback, useEffect } from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DemandeView = ({ style }) => {
  const [buttonIconVisible, setButtonIconVisible] = useState(false);
  const navigation = useNavigation();
  const [demandes, setDemandes] = useState([]); // Nouvel état pour stocker les demandes
  const [selectedDemande, setSelectedDemande] = useState(null);

  const fetchDemandes = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('user');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userId = userData?.id;

        if (userId) {
          const response = await axios.get('http://192.168.1.104:8080/gestion_events/demande/getAll');
          const allDemandes = response.data;

          // Filter demands based on the user ID
          const userDemandes = allDemandes.filter(demande => demande.user.id === userId);

          setDemandes(userDemandes);
        }
      }
    } catch (error) {
      console.error('Error fetching demandes:', error);
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  return (
    <View style={[styles.demandeView, style]}>
      <View style={styles.headerFlexBox1}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("AddDemande")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/button.png")}
            />
          </Pressable>
          <Text style={styles.demandes}>Demandes</Text>
          <Pressable
            style={styles.profile}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/profile1.png")}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView
        style={[styles.demandeList, styles.bottomTabsSpaceBlock]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.demandeListScrollViewContent}
      >

        {demandes.map((demande) => (
          <TouchableOpacity
            key={demande.id}
            style={styles.contactFlexBox}
            activeOpacity={0.2}

            onPress={() => {
              setSelectedDemande(demande);
              //navigation.navigate("DetailsDemande");

              console.log("Selected demande before navigation: ", demande);
              navigation.navigate("DetailsDemande", { selectedDemande: demande });
              //navigation.navigate("DetailsDemande", { demandeId: demande.id });
            }}
          >
            {/* Affichez les détails de la demande en utilisant les données de la demande */}
            <View style={styles.profile1}>
              <Image
                style={styles.profileimageIcon}
                contentFit="cover"
                source={require("../assets/profileimage1.png")}
              />
              <View style={styles.singledemande}>
                <Text style={styles.nomdemande}>{demande.titre}</Text>
                <Text style={[styles.description, styles.timeTypo]}>
                  {demande.description}
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>Voir</Text>
          </TouchableOpacity>
        ))}


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  demandeListScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  bottomTabsSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  timeTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  contactFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_mini,
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  profilTypo: {
    marginTop: 7,
    height: 14,
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: 38,
    height: 38,
  },
  demandes: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.gray800,
  },
  profile: {
    width: 40,
    height: 40,
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  headerFlexBox1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  profileimageIcon: {
    width: 42,
    height: 42,
    display: "none",
  },
  nomdemande: {
    fontSize: FontSize.size_sm,
    width: 155,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.gray800,
  },
  description: {
    color: Color.colorSilver,
    marginTop: 4,
    textAlign: "left",
  },
  singledemande: {
    marginLeft: 12,
  },
  profile1: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    width: 48,
    color: Color.colorDarkorange,
    textAlign: "center",
  },
  contact1: {
    marginTop: 6,
  },
  demandeList: {
    flex: 1,
  },
  demandeView: {
    width: 375,
    height: 812,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default DemandeView;
