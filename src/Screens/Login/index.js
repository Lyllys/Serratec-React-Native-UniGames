import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from './styles';
import InputText from '../../Components/TextInput';
import { LinearGradient } from "expo-linear-gradient";



const Login = () => {
  return (
    <View style={styles.container}>
{/* <LinearGradient colors={['#000', '#1e013d','#300063'  ]} start={{ x: 0.0, y: 2.0 }}
        end={{ x: 0.0, y: 1.0 }} style={styles.gradiente} /> */}
     <LinearGradient colors={['#020024', '#6c6b6c','#000000', '#10001c' , '#7000c4','#0e0019','#000000' ]}
     start={{ x: 0.0, y: 7.0 }}
     end={{ x: 0.0, y: -4.2 }}
     style={styles.gradiente} /> 
        <Image source={require('../../imagens/logo.png')} style={styles.img} />
      <InputText texto='email' nome="at" />
      <InputText texto='senha' nome='lock' />
    
     
    
    </View>
  )
};

export default Login;