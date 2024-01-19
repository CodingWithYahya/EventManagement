import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import SplashView from "../components/SplashView";

const SplashSCreen = () => {
  return (
    <ImageBackground
      style={styles.splashscreenIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <SplashView />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splashscreenIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SplashSCreen;
