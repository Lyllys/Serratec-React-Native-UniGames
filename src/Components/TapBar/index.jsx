import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles.js';


const TapBar = () => {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={['#50C', '#50F', '#50C']}>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Icon name="compass" size={20} color={'#305'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="star" size={20} color={'#305'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="user" size={20} color={'#305'} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

export default TapBar;