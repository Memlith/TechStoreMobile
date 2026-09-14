import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Category(props) {
  return (
    <View >
      <Text >{props.icon}</Text>
      <Text >{props.name}</Text>
    </View>
  );
}

