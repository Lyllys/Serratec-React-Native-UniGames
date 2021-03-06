import React from "react";
import { View , Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AvatarPerfil from "../AvatarPerfil";


const Header = ({aoClicar}) => {

   
    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
          <AvatarPerfil tamanho="medium"
          foto={ 
            'https://m.extra.globo.com/incoming/24679567-0b3-ac6/w640h360-PROP/avatar-larissa-manoela-facebook-1.jpg'} />
            <View style={styles.containerTexto}>
                <Text style={styles.textoSaudacao}>Bem-vinde de volta,</Text>
                <Text style={styles.textoNome}>Maria</Text>
            </View>

            </View>
           
            <TouchableOpacity  style={styles.icone} activeOpacity={0.7} onPress={aoClicar}>
            <FontAwesome name='sign-out' color='grey' size={20}  />
            </TouchableOpacity>
        </View>

    )
};

export default Header;

