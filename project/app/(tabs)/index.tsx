import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { Search, MapPin } from 'lucide-react-native';

const THEME = {
  primary: '#DEB887', // Burlywood
  secondary: '#E6C9A8', // Lighter burlywood
  text: '#5D4037', // Dark brown
  background: '#FDF5E6', // Old lace
};

const categories = [
  { id: 1, name: 'Haircut', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Massage', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=60' },
  { id: 4, name: 'Nails', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&auto=format&fit=crop&q=60' },
];

const popularSalons = [
  {
    id: 1,
    name: 'Glamour Studio',
    rating: 4.8,
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Beauty Haven',
    rating: 4.6,
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=60',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Sarah!</Text>
          <View style={styles.location}>
            <MapPin size={16} color={THEME.text} />
            <Text style={styles.locationText}>San Francisco, CA</Text>
          </View>
        </View>
      </View>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBar}>
          <Search size={20} color={THEME.text} />
          <Text style={styles.searchText}>Search for services...</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <Animated.View
              key={category.id}
              entering={FadeInRight.delay(index * 100)}
            >
              <TouchableOpacity style={styles.categoryCard}>
                <Image source={{ uri: category.image }} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Salons</Text>
        {popularSalons.map((salon, index) => (
          <Animated.View
            key={salon.id}
            entering={FadeInDown.delay(300 + index * 100)}
          >
            <TouchableOpacity style={styles.salonCard}>
              <Image source={{ uri: salon.image }} style={styles.salonImage} />
              <View style={styles.salonInfo}>
                <Text style={styles.salonName}>{salon.name}</Text>
                <View style={styles.salonDetails}>
                  <Text style={styles.salonRating}>⭐ {salon.rating}</Text>
                  <Text style={styles.salonDistance}>{salon.distance}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    backgroundColor: '#8c6a4d',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    marginLeft: 4,
    color: THEME.text,
    fontFamily: 'Poppins_400Regular',
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
    padding: 12,
    borderRadius: 12,
  },
  searchText: {
    marginLeft: 8,
    color: THEME.text,
    fontFamily: 'Poppins_400Regular',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
    marginBottom: 16,
  },
  categoriesContainer: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: THEME.primary,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
  },
  salonCard: {
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
  salonImage: {
    width: '100%',
    height: 200,
  },
  salonInfo: {
    padding: 16,
  },
  salonName: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
  },
  salonDetails: {
    flexDirection: 'row',
    marginTop: 8,
  },
  salonRating: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
    marginRight: 16,
  },
  salonDistance: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: THEME.text,
  },
});