import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import InputText from '../../Components/TextInput';
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";
import LinearGradient from "expo-linear-gradient";
import Background from "../../Components/Background";



const Login = () => {
  const navigation = useNavigation();

  function manipuladorPerfil() {
    navigation.navigate('Home')
  }

  function manipuladorCadastro() {
    navigation.navigate('Cadastro')
  }


  return (
   
      <View  style={styles.container}>
 <Background >
        <Image source={require('../../imagens/logo.png')} style={styles.img} />
        <InputText texto='email' nome="at" />
        <InputText texto='senha' nome='lock' />
        <Button texto='Logar' aoLogar={manipuladorPerfil} />
        <View style={styles.containerCadastro}>
          <Text style={styles.textoNovo} >É novo por aqui?  </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={manipuladorCadastro}>
            <Text style={styles.textoCadastreSe}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        </Background>
      </View>
    

  )
};

export default Login;