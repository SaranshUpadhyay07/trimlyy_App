import { Alert,View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

//uber wala logic
import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { googleOAuth } from "@/lib/auth";

const { height: screenHeight } = Dimensions.get('window');

const SignIn = () => {
  const handleLogin = () => {
  };


  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const handleGoogleSignIn = async () => {
      const result = await googleOAuth(startOAuthFlow);
  
      if (result.code === "session_exists") {
        Alert.alert("Success", "Session exists. Redirecting to home screen.");
        router.replace("/(root)/(tabs)/home");
      }
  
      Alert.alert(result.success ? "Success" : "Error", result.message);
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e6d8cb" }}>
      <ScrollView 
        contentContainerStyle={{ 
          minHeight: screenHeight, 
          backgroundColor: "#e6d8cb", 
          paddingHorizontal: 32, 
          paddingBottom: 40 
        }} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image 
          source={images.onboarding} 
          style={{ width: '100%', height: screenHeight * 0.45 }} 
          resizeMode="contain" 
        />

        <Text style={{ textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Rubik', fontSize: 16, color: '#444' }}>
          Welcome to Trimlyy
        </Text>

        <Text style={{ fontSize: 26, fontFamily: 'Rubik-Bold', color: '#333', textAlign: 'center', marginTop: 8 }}>
          Let's Get You Closer To {"\n"}
          <Text style={{ color: '#d97706' }}>
            Your personalised Salon booking Experience
          </Text>
        </Text>

        <Text style={{ fontSize: 18, fontFamily: 'Rubik', color: '#555', textAlign: 'center', marginTop: 48 }}>
          Sign In/Sign Up to Trimlyy
        </Text>

        <TouchableOpacity 
          onPress={handleGoogleSignIn} 
          style={{
            backgroundColor: 'white',
            borderRadius: 999,
            paddingVertical: 14,
            marginTop: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={icons.google}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 16, fontFamily: 'Rubik-Medium', color: '#333', marginLeft: 8 }}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontFamily: 'Rubik-Medium', color: '#333', textAlign: 'center', marginTop: 20 }}>
          OR
        </Text>

        <TouchableOpacity 
          onPress={handleLogin} 
          style={{
            backgroundColor: 'white',
            borderRadius: 999,
            paddingVertical: 14,
            marginTop: 20,
            marginBottom: 40,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={icons.email}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 16, fontFamily: 'Rubik-Medium', color: '#333', marginLeft: 8 }}>
              Continue with Email
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
