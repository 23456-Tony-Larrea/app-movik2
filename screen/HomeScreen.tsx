import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('HolaMundo')}
      />
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