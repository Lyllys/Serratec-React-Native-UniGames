import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View , ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RotaAutenticacao from './src/Components/Navigation/RotaAutenticacao';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {

  return (
   
 <NavigationContainer>

    <SafeAreaProvider style={styles.container}>
  
     <StatusBar  barStyle="light-content"
          backgroundColor="transparent"
          translucent/>
          
        <RotaAutenticacao />
     
    </SafeAreaProvider>
   
    </NavigationContainer>
   
 
   

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});
