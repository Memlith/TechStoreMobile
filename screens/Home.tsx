import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.banner}>
        <Text style={styles.title}>Tecnologia para o seu dia</Text>
        <Text style={styles.description}>
          Encontre os melhores produtos para sua vida digital.
        </Text>
      </View>
      <View>
        <Category
          icon="💻"
          name="Notebooks" />
        <Category
          icon="📱"
          name="Smartphones" />
        <Category
          icon="🎧"
          name="Acessórios" />
      </View>
      <View>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  banner: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});