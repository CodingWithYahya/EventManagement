import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, Border, FontFamily } from "../GlobalStyles";
import axios from 'axios';


const SignUpForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleSignUp = async () => {
    try {
      // Vérifier si tous les champs obligatoires sont remplis
      if (!username || !password || !nom || !prenom || !telephone || !email) {
        Alert.alert('Missing Information', 'Please fill in all required fields.');
        return;
      }

      const response = await axios.post('http://192.168.1.104:8080/gestion_events/auth/signup', {
        username,
        password,
        nom,
        prenom,
        telephone,
        email,
        roleName: 'etudiant',
      });

      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);

      if (response.status === 200) {
        // Handle successful signup
        const data = response.data;
        console.log('Signup successful. User data:', data);
        Alert.alert('Signup Successful', 'You can now login with your new account.');
        //updateUserData(data);

        // Redirect the user to the login screen or any other screen as needed
        navigation.navigate('Login');
      } else {
        // Handle other response statuses
        console.error('Signup failed. Status:', response.status);

        // Log the response text to get more details on the failure
        const errorText = response.data.message || 'Signup failed.';
        console.error('Error response text:', errorText);
        Alert.alert('Signup Failed', errorText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle and display error to the user
      Alert.alert('Error', 'An unexpected error occurred during signup.');

    }
  };

  return (
    <View style={[styles.signUp, styles.signFlexBox]}>
      <View style={[styles.signUpParent, styles.signFlexBox]}>
        <Text style={styles.signUp1}>Sign Up</Text>
        <View style={styles.form}>
          <View style={[styles.emailInput, styles.emailSpaceBlock]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.nom, styles.nomSpaceBlock]}
                placeholder="Nom"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={nom}
                onChangeText={text => setNom(text)}
              />
            </View>
          </View>
          <View style={[styles.emailInput1, styles.emailShadowBox]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.nom, styles.nomSpaceBlock]}
                placeholder="Prenom"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={prenom}
                onChangeText={text => setPrenom(text)}
              />
            </View>
          </View>
          <View style={[styles.emailInput2, styles.emailShadowBox]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.nom, styles.nomSpaceBlock]}
                placeholder="Telephone"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={telephone}
                onChangeText={text => setTelephone(text)}
              />
            </View>
          </View>
          <View style={[styles.emailInput3, styles.emailShadowBox]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.nom, styles.nomSpaceBlock]}
                placeholder="Email Address"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={[styles.emailInput4, styles.emailShadowBox]}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <TextInput
                style={[styles.nom, styles.nomSpaceBlock]}
                placeholder="Username"
                keyboardType="default"
                placeholderTextColor="#a4a4a4"
                value={username}
                onChangeText={text => setUsername(text)}
              />
            </View>
          </View>
          <View style={[styles.passwordInput, styles.emailShadowBox]}>
            <View style={[styles.frameParent2, styles.buttonFlexBox]}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame11.png")}
              />
              <TextInput
                style={[styles.textinput, styles.nomSpaceBlock]}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor="#a4a4a4"
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomSection, styles.signFlexBox]}>
        <TouchableOpacity
          style={[styles.button, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => {
            setFormSubmitted(true);
            handleSignUp();
          }}
        >
          <Text style={[styles.signUp2, styles.nomTypo]}>Sign Up</Text>
        </TouchableOpacity>
        <View style={[styles.prompt, styles.buttonFlexBox]}>
          <Text style={styles.loginHere1Typo}>
            <Text style={styles.doYouHave}>Do you have an account?</Text>
            {` `}
          </Text>
          <Pressable
            style={styles.loginHere}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.loginHere1, styles.loginHere1Typo]}>
              Login here
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  emailSpaceBlock: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  nomSpaceBlock: {
    marginLeft: 22,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  emailShadowBox: {
    marginTop: 10,
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
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  nomTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  loginHere1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  signUp1: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.colorDarkorange,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  nom: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    paddingHorizontal: Padding.p_xl,
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.colorGhostwhite,
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  emailInput1: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  emailInput2: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  emailInput3: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  emailInput4: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  textinput: {
    fontFamily: FontFamily.robotoRegular,
  },
  frameParent2: {
    width: 273,
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
  },
  form: {
    width: 313,
    marginTop: 20,
  },
  signUpParent: {
    height: 446,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  signUp2: {
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
    flexDirection: "row",
    justifyContent: "center",
  },
  doYouHave: {
    color: Color.gray800,
  },
  loginHere1: {
    color: Color.colorDarkorange,
  },
  loginHere: {
    marginLeft: 5,
  },
  prompt: {
    marginTop: 20,
    justifyContent: "center",
  },
  bottomSection: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  signUp: {
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    height: 696,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_21xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SignUpForm;
