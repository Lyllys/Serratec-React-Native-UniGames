import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons'


const InputText = ({ texto , nome}) => {
    return (
        <View style={styles.container}>
           
            <TextInput
                placeholder={texto}
                style={styles.inputText}
            />
             <FontAwesome5
                name={nome}
                size={20}
                style={styles.icone}

            />
        </View>



    )
};

export default InputText;