import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const TapBar = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#1C1C1C',
                style: { backgroundColor: '#a937d4', height: 50, borderTopColor: '#a937d4', paddingBottom: 5,paddingTop: 4, borderTopWidth: 1, borderRadius: 30, marginHorizontal: 10, marginBottom: 20 },
                labelStyle: {
                    fontSize: 15,
                    margin: 0,
                    padding: 0,
                  },
            }}
            sceneContainerStyle={{ backgroundColor: ['#000'] }}

        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: () => (<Icon name="compass" size={20} color={'#fff'} />)
                }} />
            <Tab.Screen name='Editar conta' component={EditarConta} options={{
                tabBarLabel: 'Editar conta',
                tabBarIcon: () => (<Icon name="star" size={20} color={'#fff'} />)
            }} />
            <Tab.Screen name='Downloads' component={Home} options={{
                tabBarLabel: 'Downloads',
                tabBarIcon: () => (<Icon name="user" size={20} color={'#fff'} />)
            }} />
        </Tab.Navigator>
    )
}


export default TapBar;