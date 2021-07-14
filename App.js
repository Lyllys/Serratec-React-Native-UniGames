import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import Login from './src/Screens/Login';
import SafeAreaProvider from 'react-native-safe-area-context';


export default function App() {
  return (
    <View style={{flex:1 , backgroundColor:'#000' }}>
    
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
         
        <Login />
      
    </View>



  );
}


