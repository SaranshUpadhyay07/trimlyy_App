import { router } from 'expo-router';
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-[#f8f4eb] h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 7 }}
      >
        {/* Header Section */}
        <View className="px-5">
          <View className="flex flex-row items-center justify-between mt-5">
            {/* User Profile */}
            <View className="flex flex-row items-center">
              <Image source={images.avatar} className="size-12 rounded-full" />
              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-rubik text-black-100">Hey</Text>
                <Text className="text-base font-rubik-medium text-black-300">
                  Saransh
                </Text>
              </View>
            </View>

            {/* Cart & Coupon Section */}
            <View className="flex flex-row items-center gap-4">
              <TouchableOpacity 
                className="flex flex-col items-center"
                onPress={() => router.push('/cart')}
              >
                <Image source={icons.cart} className="size-6" />
                <Text className="text-base font-rubik-medium text-black-300">
                  Cart
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex flex-col items-center"
                onPress={() => router.push('/coupon')}
              >
                <Image source={icons.coupon} className="size-6" />
                <Text className="text-base font-rubik-medium text-black-300">
                  Coupon
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Component */}
          <Search />
        </View>

        {/* Featured Section */}
        <View className="mt-5 px-4">
          <Text className="text-lg font-rubik-bold text-black-300 mb-3">
            Featured
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-4">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </View>
          </ScrollView>
        </View>

        {/* Regular Cards Section */}
        {/* Recommended for you Section */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-rubik-bold text-black-300 mb-3">
            Recommended for you
          </Text>
          <View className="flex flex-row flex-wrap justify-between">
            <View className="w-[48%]">
              <Card />
            </View>
            <View className="w-[48%]">
              <Card />
            </View>
            <View className="w-[48%]">
              <Card />
            </View> 
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}