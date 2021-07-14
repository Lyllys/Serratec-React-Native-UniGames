import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './styles.js';


const SmallCard = ({img, title}) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: img}} resizeMode="cover" style={styles.image} />
            <View style={styles.cardBody}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default SmallCard;