import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: "#e6d8cb" }}>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#e6d8cb" }} 
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={images.onboarding} 
          className="w-full h-4/6" 
          resizeMode="contain" 
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Trimlyy
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-300">
              Your personalised Salon booking Experience
            </Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Sign In/Sign Up to Trimlyy
          </Text>

          <TouchableOpacity 
            onPress={handleLogin} 
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center"> 
              <Image 
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <Text className="text-lg font-rubik-medium text-black-300 ml-2 text-center mt-5">
            OR
          </Text>

          <TouchableOpacity 
            onPress={handleLogin} 
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center"> 
              <Image 
                source={icons.phone}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Number
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
