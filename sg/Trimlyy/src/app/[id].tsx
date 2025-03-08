import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const SalonDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>SalonDetailsScreen : {id}</Text>
    </View>
  );
};

export default SalonDetailsScreen;
