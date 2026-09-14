import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ProductCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {props.name}
      </Text>
      <Text>
        {props.category}
      </Text>
      <Text style={styles.preco}>
        {props.price}
      </Text>
      <Pressable onPress={adicionarAoCarrinho}>
        <Text>Adicionar ao Carrinho</Text>
      </Pressable>
    </View>
  );
}

function adicionarAoCarrinho() {
  console.log('Produto adicionado ao carrinho!');
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
});