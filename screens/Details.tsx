import { View, Text, StyleSheet } from 'react-native';

export default function Details({ route }: any) {

  const id = route.params.id;

  return (
    <View style={styles.container}>
      <Text>
        Produto selecionado: {id}
      </Text>
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
});