import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs} from "expo-router"; 

import icons from '@/constants/icons';

const TabIcon =({focused, icon, title}: {focused: boolean; icon: any; title: string})=>{
    return(
    <View className="felx-1 mt-7 flex flex-col items-center">
        <Image source={icon} tintColor={focused ? '#a3671a': '#f8f4eb'} resizeMode="contain" className="size-6"/>
        <Text className={`text-xs w-full text-center mt-1`} style={{ color: focused ? '#a3671a' : '#000' }}>
            {title}
        </Text>
    </View>
    );
};

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle: {
                backgroundColor: '#c7914c',
                // position: 'absolute',
                borderTopColor: '#c7914c',
                borderTopWidth: 1, 
                minHeight:70,
            }
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
           title: 'Home',
           headerShown: false,
           tabBarIcon: ({focused})=>{
            return(
            <View>
                <TabIcon icon={icons.home} focused={focused} title="Home"/>
            </View>
            );
           }  
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
           title: 'Explore',
           headerShown: false,
           tabBarIcon: ({focused})=>{
            return(
            <View>
                <TabIcon icon={icons.search} focused={focused} title="Explore"/>
            </View>
            );
           }  
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
           title: 'Booking',
           headerShown: false,
           tabBarIcon: ({focused})=>{
            return(
            <View>
                <TabIcon icon={icons.calendar} focused={focused} title="Booking"/>
            </View>
            );
           }  
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
           title: 'Profile',
           headerShown: false,
           tabBarIcon: ({focused})=>{
            return(
            <View>
                <TabIcon icon={icons.person} focused={focused} title="Profile"/>
            </View>
            );
           }  
        }}
      />
    </Tabs>
  )
}

export default TabsLayout