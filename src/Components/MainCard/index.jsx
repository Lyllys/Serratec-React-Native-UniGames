import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';


const MainCard = (props) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7}  onPress={props.visualizar}>
            <Image source={{uri:(props.img)}} resizeMode="cover" style={styles.image} /> 
            <View style={styles.cardBody}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainCard;