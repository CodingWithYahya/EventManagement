import React, { useState, useEffect, useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfilView = ({ style }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const fetchUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('user');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        console.log('UserData:', userData); // Affichez l'objet userData dans la console
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    // Supprimer les données utilisateur de AsyncStorage
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('event');
    // Rediriger l'utilisateur vers l'écran de connexion
    navigation.navigate('Login');
  };

  const fetchUserDetails = async () => {
    try {
      const authToken = await AsyncStorage.getItem('event');
      const userId = userData?.id;

      if (authToken && userId) {
        const response = await axios.get(`http://localhost:8080/gestion_events/user/id/${userId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Utilisez la réponse pour mettre à jour les informations utilisateur si nécessaire
        const userDetails = response.data;
        console.log('User details:', userDetails);
        // Mettez à jour les informations utilisateur dans l'état local si nécessaire
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <View style={[styles.profilView, style]}>
      <View style={styles.topHeader}>
        <View style={[styles.header, styles.headerSpaceBlock]}>
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
          <Text style={[styles.profil, styles.profilFlexBox]}>Profil</Text>
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </View>
      </View>
      <ScrollView
        style={styles.chatlist}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.chatListScrollViewContent}
      >
        <Pressable style={[styles.chatopenai, styles.chatopenaiBorder]}>
          <View style={[styles.profile, styles.profileLayout]}>
            <View style={styles.userLayout}>
              <Image
                style={[styles.userChild, styles.childPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <Image
                style={[styles.userChild, styles.childPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-98.png")}
              />
            </View>
          </View>
          <View style={styles.buttonParent}>
            <View style={[styles.button1, styles.icon1Layout]}>
              <View style={[styles.bg, styles.bgLayout]}>
                <Pressable
                  style={[styles.bgChild, styles.bgLayout]}
                  onPress={handleLogout}
                />
              </View>
              <View style={[styles.text, styles.textPosition]}>
                <Text style={[styles.logout, styles.textPosition]}>LOGOUT</Text>
              </View>
            </View>
            <View style={[styles.icon1, styles.icon1Layout]}>
              <Image
                style={styles.mediumDefaultIcon}
                contentFit="cover"
                source={require("../assets/medium-default.png")}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.detailssection, styles.detailssectionSpaceBlock]}
        >
          <View style={styles.profile1}>
            <View style={styles.chat}>
            <Text style={styles.nom}>Nom : {userData?.nom}</Text>
                <Text style={styles.nom}>Prenom : {userData?.prenom}</Text>
                <Text style={styles.nom}>Email : {userData?.email}</Text>
                <Text style={styles.nom}>Telephone : {userData?.telephone || '0606060606'}</Text>
                <Text style={styles.nom}>Username : {userData?.username}</Text>
                {/* Remarque : Vous ne devez JAMAIS afficher le mot de passe de l'utilisateur dans l'interface utilisateur réelle */}
                <Text style={styles.nom}>Password : {userData?.username || 'Chargement...'} </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.detailssectionSpaceBlock}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <View style={styles.divider}>
            <View style={styles.dividerPrimary} />
          </View>
          <View style={[styles.action, styles.actionSpaceBlock]}>
            <View style={styles.elements}>
              <Text style={styles.actionLabel}>Mes Demandes</Text>
              <Image
                style={styles.icon2}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
          </View>
          <View style={styles.actionSpaceBlock}>
            <View style={styles.dividerPrimary} />
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chatListScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  profilFlexBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  chatopenaiBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  profileLayout: {
    width: 50,
    alignItems: "center",
  },
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon1Layout: {
    height: 37,
    alignItems: "center",
  },
  bgLayout: {
    width: 96,
    height: 37,
  },
  textPosition: {
    height: 14,
    width: 53,
    left: "50%",
    top: "50%",
    marginLeft: -26.5,
    position: "absolute",
  },
  detailssectionSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  actionSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  profil2Typo: {
    marginTop: 7,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    height: 14,
    justifyContent: "center",
    display: "flex",
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
  profil: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    width: 84,
    justifyContent: "center",
    color: Color.gray800,
    display: "flex",
    fontWeight: "700",
  },
  profileIcon: {
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  topHeader: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  userChild: {
    height: 50,
    width: 50,
  },
  userLayout: {
    height: 50,
    width: 50,
  },
  profile: {
    flexDirection: "row",
  },
  bgChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorRed,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg: {
    zIndex: 0,
  },
  logout: {
    marginTop: -6.85,
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    marginTop: -6.3,
    zIndex: 1,
  },
  button1: {
    justifyContent: "space-between",
  },
  mediumDefaultIcon: {
    width: 24,
    height: 24,
  },
  icon1: {
    backgroundColor: "#b1b1b1",
    width: 37,
    padding: Padding.p_xs,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonParent: {
    width: 137,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  chatopenai: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  nom: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    color: Color.gray800,
  },
  chat: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  profile1: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  detailssection: {
    height: 188,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  dividerPrimary: {
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  divider: {
    alignSelf: "stretch",
  },
  actionLabel: {
    fontSize: FontSize.semiboldBodyButton_size,
    letterSpacing: 0.3,
    lineHeight: 26,
    fontFamily: FontFamily.alefBold,
    color: Color.colorPaletteNeutral90,
    textAlign: "left",
    flex: 1,
    fontWeight: "700",
  },
  icon2: {
    height: 28,
    marginLeft: 8,
    width: 28,
    borderRadius: Border.br_xs,
  },
  elements: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  action: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  chatlist: {
    flex: 1,
    alignSelf: "stretch",
  },
  profilView: {
    width: 375,
    height: 812,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default ProfilView;
