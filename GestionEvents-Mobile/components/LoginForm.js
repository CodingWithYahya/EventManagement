import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useState } from 'react';
//import Cookies from "js-cookie";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.104:8080/gestion_events/auth/signin', {
        username,
        password,
      });

      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);

      if (response.status === 200) {
        // Handle successful login
        const data = response.data;
        console.log('Login successful. User data:', data);
        //updateUserData(data);

        if (data.error) {
          // Affichez le message d'erreur spécifique reçu du backend
          setErrorMessage(data.error);
        } else {
          // Check if 'event' is defined before storing it
          if (data.token) {
            await AsyncStorage.setItem('event', data.token);
          } else {
            // If 'event' is not defined, remove it from AsyncStorage
            await AsyncStorage.removeItem('event');
          }

          // Store user information in AsyncStorage
          await AsyncStorage.setItem('user', JSON.stringify(data));

          // Redirigez l'utilisateur vers l'écran suivant après la connexion réussie
          navigation.navigate('BottomTabsRoot', { screen: '' });
        }
      } else {
        // Handle other response statuses
        console.error('Login failed. Status:', response.status);

        if (response.status === 404) {
          console.log('User not found.');
          // Vous pouvez afficher un message à l'utilisateur ici
        }

        // Log the response text to get more details on the failure
        const errorText = response.data.message || 'Login failed.';
        console.error('Error response text:', errorText);

        setErrorMessage(errorText);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Erreur de connexion. Vérifiez vos informations d\'identification.');
    }
  };

  return (
    <View style={styles.login}>
      <View style={styles.logInParent}>
        <Text style={styles.logIn}>Log In</Text>
        <View style={styles.form}>
          <View style={[styles.emailInput, styles.inputShadowBox]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.usernameOrEmail, styles.textinputSpaceBlock]}
                placeholder="Email Address"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
          </View>
          <View style={styles.passwordSection}>
            <View style={[styles.passwordInput, styles.inputShadowBox]}>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame11.png")}
                />
                <TextInput
                  style={[styles.textinput, styles.textinputSpaceBlock]}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  placeholderTextColor="#a4a4a4"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>
            <Text style={[styles.forgotPassword, styles.textTypo]}>
              Forgot password
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={handleLogin}
          //onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
        <View style={[styles.prompt, styles.buttonFlexBox]}>
          <Text style={[styles.dontHaveAn, styles.textTypo]}>
            Don’t have an account?
          </Text>
          <Pressable
            style={styles.signUpHereContainer}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.textTypo}>
              {` `}
              <Text style={styles.signUpHere}>Sign up here</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputShadowBox: {
    paddingHorizontal: Padding.p_xl,
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  textinputSpaceBlock: {
    marginLeft: 22,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  login1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  logIn: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.colorDarkorange,
  },
  frameIcon: {
    width: 24,
    overflow: "hidden",
    height: 24,
  },
  usernameOrEmail: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  textinput: {
    fontFamily: FontFamily.robotoRegular,
  },
  frameGroup: {
    width: 273,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
  },
  forgotPassword: {
    marginTop: 6,
    color: Color.colorDarkorange,
  },
  passwordSection: {
    alignItems: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  form: {
    width: 313,
    marginTop: 69,
  },
  logInParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  login1: {
    fontSize: FontSize.size_lg,
    color: Color.gray50,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.colorDarkorange,
    width: 317,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  dontHaveAn: {
    color: Color.gray800,
  },
  signUpHere: {
    color: Color.colorDarkorange,
  },
  signUpHereContainer: {
    marginLeft: 5,
  },
  prompt: {
    marginTop: 20,
  },
  bottomSection: {
    marginTop: 78,
    alignItems: "center",
    alignSelf: "stretch",
  },
  login: {
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_36xl,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
});

export default LoginForm;
