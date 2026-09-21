import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Category from '../components/Category';

export default function Products({ navigation }: any) {

  const [cart, setCart] = useState<any[]>([]);

  const [category, setCategory] = useState('Todos');
  const filteredProducts = category === 'Todos' ? products : products.filter(product => product.category === category);

  const [quantity, setQuantity] = useState(0);
  function addToCart(product: any) {
    setQuantity(quantity + 1);
    setCart([...cart, product]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <Text>Escolha os produtos que deseja adicionar ao carrinho</Text>
      <Text>Quantidade no Carrinho: {quantity}</Text>
      <Pressable onPress={() => setCategory('Todos')}>
        <Text>Todos</Text>
      </Pressable>
      <Category
        icon=""
        name="Notebooks"
        setCategory={setCategory}
      />
      <Category
        icon=""
        name="Smartphones"
        setCategory={setCategory}
      />
      <Category
        icon=""
        name="Acessórios"
        setCategory={setCategory}
      />

      <Pressable onPress={() => navigation.navigate('Cart', { cart: cart })}>
        <Text>Ver Carrinho</Text>
      </Pressable>

      {
        filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            addToCart={() => addToCart(product)}
            onPressDetails={() => navigation.navigate('Details', { id: product.id })} id={0} />
        ))
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});