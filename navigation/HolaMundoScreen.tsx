import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HolaMundoScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});