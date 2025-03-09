import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export default function Splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacity animation
  const translateX = useRef(new Animated.Value(-100)).current; // Start position (left)

  useEffect(() => {
    async function loadSplash() {
      await SplashScreen.preventAutoHideAsync();

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1, // Fully visible
          duration: 2000, // 2 seconds fade-in
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0, // Move to center
          duration: 2000, // Same duration as fade-in
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 1000); // Keep visible for 1s before hiding
      });
    }

    loadSplash();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/logo.png")}
        style={[
          styles.logo,
          { opacity: fadeAnim, transform: [{ translateX }] }, // Apply animations
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#70543c", // Background color
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
