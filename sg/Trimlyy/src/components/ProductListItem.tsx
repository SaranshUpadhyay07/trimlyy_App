import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View , Image, Pressable }from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizzaImage = 'https://th.bing.com/th/id/OIP.IK965LiBt-7eLvNgnGs2WAHaEm?rs=1&pid=ImgDetMain';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}:ProductListItemProps) => {
  return(
    <Link href={`/${product.id}`} asChild>

      <Pressable style={styles.container}>
        <Image source={{uri: product.image||defaultPizzaImage}} style={styles.image} resizeMode="cover"/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.book}>{product.price}</Text>
      </Pressable>

    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F4E7D7',
    padding:10,
    borderRadius:20,
    flex:1,
    maxWidth : '50%',
  },
  image:{
    width:'100%',
    aspectRatio:1,
    borderRadius:20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  book: {
    color: Colors.light.tint,
    fontWeight:'bold',
  }
});
