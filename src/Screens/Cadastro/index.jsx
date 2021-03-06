import React from 'react';
import styles from './styles';
import { View, Image, Alert, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/Button';
import InputText from '../../Components/TextInput';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { useState } from 'react';
import Background from '../../Components/Background';


const Cadastro = () => {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const manipuladorPerfil = () => {

    axios.post('http://192.168.0.104:8080/usuario', {
      nome,
      email,
      senha,
      cpf,
      dataNascimento
    })
      .then(() => {
        Alert.alert(
          "Parabéns",
          "Cadastro concluído com sucesso!",
          [
            {
              text: "OK, obrigado.", onPress: () => {
                navigation.navigate('Login')
                setNome('')
                setEmail('')
                setSenha('')
                setCpf('')
                setDataNascimento('')

              }
            }
          ]
        );
      }).catch(erro => console.log(erro))
  }

  return (

    
      <KeyboardAvoidingView style={{ flex: 1 }}
    behavior='padding'
    keyboardVerticalOffset={
    Platform.select({
       ios: () => 0,
       android: () => -125
    })()
  }
    >
     
     
        <View style={styles.container}>
        <Background>

          <Image source={require('../../imagens/logo.png')} style={styles.img} />
          <InputText texto='nome' nome="signature"  valor={setNome} />
          <InputText texto='email' nome="at" valor={setEmail} tipo='email-address' />
          <InputText texto='senha' nome='lock' seguranca={true} valor={setSenha} />
          <InputText texto='CPF' nome='id-card' tipo='numeric' valor={setCpf} />
          <InputText texto='data de nascimento (yyyy-mm-dd)' nome='calendar-alt' tipo='numeric' valor={setDataNascimento} />
          {/* <InputText texto='foto do perfil (url)' nome='camera' /> */}
          <Button texto='CADASTRAR' aoLogar={manipuladorPerfil} />
          </Background>
        </View>
      
        
    </KeyboardAvoidingView>

  )
};

export default Cadastro;