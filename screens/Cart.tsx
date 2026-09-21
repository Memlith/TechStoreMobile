import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Cart({ route }: any) {

  const cart = route.params.cart;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {cart.length === 0 ? (
        <Text>Seu carrinho está vazio</Text>
      ) : (
        <Text>Produtos no carrinho:</Text>
      )}
      {cart.map(product => (<Text> {product.name} - R$ {product.price}</Text>))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  description: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
});
