import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { LinearGradient } from "expo-linear-gradient";

const Button = ( {texto, aoLogar}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={aoLogar} > 
            <Text style={styles.texto}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
};
export default Button; 