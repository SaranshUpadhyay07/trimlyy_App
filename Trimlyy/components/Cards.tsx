import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
    onPress?: ()=>void;
}

export const FeaturedCard = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
        <View className="flex flex-row items-center bg-white/90 px-2 top-5 p-1 absolute rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />            
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">4.4</Text>
        </View>
        <Image source ={images.newYork} className="w-full h-40 rounded-lg"/>
        <View className="flex flex-col mt-2" >
            <Text className="text-base font-rubik-bold text-black-300" numberOfLines={1}>Your Cozy Salon</Text>
            <Text className="text-xs font-rubik text-black-200">Kiit Road </Text>
            <View className="flex flex-row items-center justify-between">
                <Image source={icons.heart} className="size-5"/>
            </View>
        </View>
    </TouchableOpacity>
  )
}


export const Card = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-1 w-full mt-4 px-4 py-3 py-4 rounded-lg bg-white shadow-lg"> 
    
        </TouchableOpacity>
  )
}
