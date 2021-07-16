import React from "react";
import { View , Text } from "react-native";
import { Avatar } from 'react-native-elements';
import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <Avatar
              size="medium"
                rounded
                source={{
                    uri:
                        'https://m.extra.globo.com/incoming/24679567-0b3-ac6/w640h360-PROP/avatar-larissa-manoela-facebook-1.jpg',
                }}
            />
            <View style={styles.containerTexto}>
                <Text style={styles.textoSaudacao}>Bem-vinde de volta,</Text>
                <Text style={styles.textoNome}>nome</Text>
            </View>
        </View>

    )
};

export default Header;

