import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import Splash from "./splash";
import { Stack, Slot } from 'expo-router';

import "./globals.css";

// Prevent splash screen from hiding too early
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded) {
        setTimeout(async () => {
          setAppReady(true);
          await SplashScreen.hideAsync(); // ✅ Hide splash screen when everything is ready
        }, 2000); // Wait 2s for a smooth transition
      }
    }
    prepareApp();
  }, [fontsLoaded]);

  if (!appReady) return <Splash />; // ✅ Show animated splash while loading

  // Return Slot instead of Stack in the root layout
  return <Slot />;
}

// Move this to app/(root)/_layout.tsx instead
export function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 200,
        gestureEnabled: true,
      }}
    />
  );
}
