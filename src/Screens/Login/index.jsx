import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import InputText from '../../Components/TextInput';
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";
import LinearGradient from "expo-linear-gradient";

const Login = () => {
  const navigation = useNavigation();

  function manipuladorPerfil() {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>

      <Image source={require('../../imagens/logo.png')} style={styles.img} />
      <InputText texto='email' nome="at" />
      <InputText texto='senha' nome='lock' />
      <Button texto='Logar' aoLogar={manipuladorPerfil}/>

    </View>
  )
};

export default Login;