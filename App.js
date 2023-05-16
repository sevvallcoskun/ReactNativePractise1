import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Sevval');
  const [age,setAge]=useState('21');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val)=>setName(val)} 
      />
      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 32'
        onChangeText={(val)=>setAge(val)} 
      />
      <Text>Name:{name}, Age:{age}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200
  }
});


