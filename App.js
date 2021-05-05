import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavBar } from './src/NavBar';
import { Schet } from './src/qwe';

export default function App() {

  return (
    <View style={styles.container}>
      <NavBar title='Расчет площади треугольника' />
      <View style={styles.src}>
        <Schet />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA'
  },
  src: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});