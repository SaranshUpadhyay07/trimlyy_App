import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import icons from "@/constants/icons";
import { useLocalSearchParams, router } from "expo-router";

const Search = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View
      className="flex flex-row items-center justify-between w-full px-4 py-2 mt-5 border border-primary-100 bg-accent-100"
      style={{ borderRadius: 15 }} // Slightly curved edges
    >
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for your Favourite Salon"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
