import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Category(props) {
  return (
    <View >
      <Text >{props.icon}</Text>
      <Pressable
        onPress={() => props.setCategory(props.name)}>
        <Text>{props.name}</Text>
      </Pressable>
    </View>
  );
}

