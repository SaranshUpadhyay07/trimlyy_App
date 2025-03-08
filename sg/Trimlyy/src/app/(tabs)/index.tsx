import { View, FlatList,StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@components/ProductListItem'; // defined @components in tsconfig

export default function TabOneScreen() {
  return (
    <View style={styles.scrn}> 
      <FlatList 
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:15, padding:10}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrn: {
    flex: 1,
    backgroundColor:'#e4b79b',
  }
});

