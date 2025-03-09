import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-[#fae0be] h-full">
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
                <Text className="text-xs font-rubik text-black-100">
                  Good Morning
                </Text>
                <Text className="text-base font-rubik-medium text-black-300">
                  Saransh
                </Text>
              </View>
            </View>
            {/* Cart Icon */}
            <View className="flex flex-col items-center">
              <Image source={icons.cart} className="size-6" />
              <Text className="text-base font-rubik-medium text-black-300">
                Cart
              </Text>
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
        <View className="mt-6 px-4">
          <Text className="text-lg font-rubik-bold text-black-300 mb-3">
            Popular Services
          </Text>
          <View className="flex flex-col gap-4">
            <Card />
            <Card />
            <Card />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
