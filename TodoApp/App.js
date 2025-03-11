import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const App = () => {

  const navigation = useNavigation();

  const handlelogin = () =>{
    //Navigate to home screen
    console.log('12345');
    navigation.navigate("Home");
    
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Login ID'/>
      <TextInput 
        style={styles.input} 
        secureTextEntry
        placeholder='Password'/>
      <TouchableOpacity 
        style={styles.button}
        onPress={handlelogin}>
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    
  },
  input: {
    width: '80%',
    height: 50,
    color: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  button: {
    width: '60%',
    height: 60,
    backgroundColor: '#007Bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  btntext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default App;

