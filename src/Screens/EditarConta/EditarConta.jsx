import React from "react";
import { Text, KeyboardAvoidingView, View, Image } from "react-native";
import InputText from "../../Components/TextInput";
import Background from "../../Components/Background";
import Button from "../../Components/Button";
import AvatarPerfil from "../../Components/AvatarPerfil";
import styles from "./styles";
const EditarConta = () => {
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
                    <View style={{ marginBottom: 20 }}>
                        <AvatarPerfil tamanho="xlarge" foto={ 
                  'https://m.extra.globo.com/incoming/24679567-0b3-ac6/w640h360-PROP/avatar-larissa-manoela-facebook-1.jpg'} />
                    </View>

                    <InputText texto='nome' nome="signature" tipo='email-address' />
                    <InputText texto='email' nome="at" />
                    <InputText texto='senha' nome='lock' secureTextEntry />
                    <InputText texto='CPF' nome='id-card' tipo='numeric' />
                    <InputText texto='data de nascimento (yyyy-mm-dd)' nome='calendar-alt' tipo='numeric' />
                    {/* <InputText texto='foto do perfil (url)' nome='camera' /> */}
                    <Button texto='SALVAR ALTERAÇÕES' />
                </Background>
            </View>


        </KeyboardAvoidingView>
    )


};

export default EditarConta;