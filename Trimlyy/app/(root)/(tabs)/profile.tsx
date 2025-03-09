import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Import useRouter for navigation

import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const router = useRouter(); // Initialize router for navigation

  const handleLogout = async () => {
    // Perform any logout logic (e.g., clearing user session)
    router.push("/sign-in"); // Navigate to SignIn page
  };

  return (
    <SafeAreaView className="bg-[#f8f4eb] h-full">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 7 }}>
        {/* Header */}
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        {/* Profile Picture & Name */}
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={images.avatar} className="size-47 relative rounded-full" />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-7" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">Saransh</Text>
          </View>
        </View>

        {/* Profile Options */}
        <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payment" />
        </View>

        {/* Additional Settings */}
        <View className="flex flex-col mt-5 pt-5 border-primary-200 border-t">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        {/* Logout Option */}
        <View className="flex flex-col mt-5 pt-5 border-primary-200 border-t">
          <SettingsItem icon={icons.logout} title="Logout" textStyle="text-danger" showArrow={false} onPress={handleLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
