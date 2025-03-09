import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const THEME = {
  primary: '#DEB887', // Burlywood
  secondary: '#E6C9A8', // Lighter burlywood
  text: '#5D4037', // Dark brown
  background: '#FDF5E6', // Old lace
};

const services = [
  {
    id: 1,
    name: 'Classic Haircut',
    price: '$30',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Full Makeup',
    price: '$80',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Spa Massage',
    price: '$100',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=60',
  },
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find Services</Text>
        <View style={styles.searchContainer}>
          <SearchIcon size={20} color={THEME.text} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            placeholderTextColor={THEME.text}
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.filters}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
              <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Hair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Makeup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Massage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Nails</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.services}>
          {services.map((service, index) => (
            <Animated.View
              key={service.id}
              entering={FadeInDown.delay(index * 100)}
              style={styles.serviceCard}
            >
              <Image source={{ uri: service.image }} style={styles.serviceImage} />
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <View style={styles.serviceDetails}>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                  <Text style={styles.serviceDuration}>{service.duration}</Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
    padding: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: THEME.text,
  },
  content: {
    flex: 1,
  },
  filters: {
    padding: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: THEME.background,
    marginRight: 12,
    borderWidth: 1,
    borderColor: THEME.secondary,
  },
  filterButtonActive: {
    backgroundColor: THEME.primary,
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
  },
  filterTextActive: {
    color: '#fff',
  },
  services: {
    padding: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: THEME.secondary,
  },
  serviceImage: {
    width: '100%',
    height: 200,
  },
  serviceInfo: {
    padding: 16,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
  },
  serviceDetails: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
  },
  servicePrice: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: THEME.primary,
    marginRight: 16,
  },
  serviceDuration: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: THEME.text,
  },
  bookButton: {
    backgroundColor: THEME.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
});