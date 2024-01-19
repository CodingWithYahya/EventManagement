import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <ImageBackground
      style={styles.signUpIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <SignUpForm />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signUpIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SignUp;
