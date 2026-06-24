import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vybraze Demo</Text>
      <Text style={styles.subtitle}>Tom Home screen — klar for migrering</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff' },
  title: { fontSize:24, fontWeight:'700', marginBottom:8 },
  subtitle: { fontSize:14, color:'#666' }
});
