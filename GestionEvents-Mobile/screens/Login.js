import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <LoginForm />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Login;
