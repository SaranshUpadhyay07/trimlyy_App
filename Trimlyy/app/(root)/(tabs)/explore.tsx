import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Cards";
import icons from "@/constants/icons";

const categories = ["All", "Salon", "Spa", "Nails", "Massage", "Haircut"];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SafeAreaView className="bg-[#f8f4eb] h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 7 }}
      >
        {/* Header */}
        <View className="px-5 flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Explore</Text>
          <Image source={icons.filter} className="size-5" />
        </View>

        {/* Search Bar */}
        <View className="mt-4 px-4">
          <Search />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5 px-4"
        >
          <View className="flex flex-row gap-3">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-primary-300"
                    : "bg-gray-200"
                }`}
              >
                <Text
                  className={`text-sm font-rubik-medium ${
                    selectedCategory === category
                      ? "text-white"
                      : "text-black-300"
                  }`}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Featured Section */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-rubik-bold text-black-300 mb-3">
            Featured Services
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-4">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </View>
          </ScrollView>
        </View>

        {/* Service Listings */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-rubik-bold text-black-300 mb-3">
            All Services
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
};

export default Explore;
