import { View, Text, StyleSheet, Pressable } from 'react-native';

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  addToCart: () => void;
  onPressDetails: any;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Pressable onPress={props.onPressDetails}>
        <Text style={styles.name}>
          {props.name}
        </Text>
        <Text>
          {props.category}
        </Text>
        <Text style={styles.preco}>
          {props.price}
        </Text>
      </Pressable>
      <Pressable onPress={props.addToCart}>
        <Text>Adicionar</Text>
      </Pressable>
    </View>
  );
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