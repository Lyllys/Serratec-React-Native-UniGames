import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { LinearGradient } from "expo-linear-gradient";


const Button = ( {texto, aoLogar}) => {
    return (
         <LinearGradient colors={['#000', '#1e013d','#300063'  ]} 
         style={styles.gradiente} > 
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={aoLogar}> 
            <Text style={styles.texto}>
                {texto}
            </Text>
        </TouchableOpacity>
        </LinearGradient>

    )
};
export default Button; 