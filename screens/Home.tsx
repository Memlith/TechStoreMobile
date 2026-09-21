import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';

export default function Home({ navigation }: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>BEM VINDO A NOSSA LOJA!</Text>
        <Text style={styles.description}>
          Tecnologia para o seu dia,encontre os melhores produtos para sua vida digital.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Ver Produtos</Text>
        </Pressable>
      </View>
    </ScrollView>
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

  button: {
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
