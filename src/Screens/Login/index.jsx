import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import InputText from '../../Components/TextInput';
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";

const Login = () => {
  const navigation = useNavigation();

  function manipuladorPerfil() {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['#000', '#1e013d','#300063'  ]} start={{ x: 0.0, y: 2.0 }}
        end={{ x: 0.0, y: 1.0 }} style={styles.gradiente} /> */}
     
      <Image source={require('../../imagens/logo.png')} style={styles.img} />
      <InputText texto='email' nome="at" />
      <InputText texto='senha' nome='lock' />
      <Button texto='logar' aoLogar={manipuladorPerfil}/>

     




    </View>
  )
};

export default Login;