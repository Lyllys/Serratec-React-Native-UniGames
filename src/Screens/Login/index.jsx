import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import InputText from '../../Components/TextInput';
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";
import LinearGradient from "expo-linear-gradient";
import Background from "../../Components/Background";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import api from "../../Components/Services/api";



const Login = () => {
  const navigation = useNavigation();

  function manipuladorPerfil() {
    navigation.navigate('Home')
  }

  function manipuladorCadastro() {
    navigation.navigate('Cadastro')
  }


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {

    let usuario = {
      user: email,
      pass: senha
    }

    api.post('/auth', usuario)
      .then(response => {
        AsyncStorage.setItem('token', response.data.token)
        // AsyncStorage.setItem('user', response.data.user)
        // AsyncStorage.setItem('idUsuario', response.data.idCliente)
        // AsyncStorage.setItem('nome', response.data.nome)
        console.log(response.data)
        navigation.navigate('Home')

      }).catch((erro) => {
        // Alert.alert("Usuário inválido!")
        console.log(erro)
      })
  }


  return (

    <View style={styles.container}>
      <Background >
        <Image source={require('../../imagens/logo.png')} style={styles.img} />
        <InputText texto='email' nome="at" valor={setEmail} tipo='email-address' />
        <InputText texto='senha' nome='lock' valor={setSenha} seguranca={true} />
        <Button texto='Logar' aoLogar={entrar} />
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