import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './styles.js';


const MainCard = (props) => {
    return (
        <View style={styles.card}>
            <Image source={{uri:(props.img)}} resizeMode="cover" style={styles.image} /> 
            <View style={styles.cardBody}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.desc}</Text>
            </View>
        </View>
    )
}

export default MainCard;