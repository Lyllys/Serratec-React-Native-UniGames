import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../../Screens/Login';
import Home from '../../Screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cadastro from '../../Screens/Cadastro';
import EditarConta from '../../Screens/EditarConta/EditarConta';
import DetalheJogo from '../../Screens/DetalheJogo'


const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
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
            <Tab.Screen name='Favoritos' component={Home} options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: () => (<Icon name="star" size={20} color={'#fff'} />)
            }} />
            <Tab.Screen name='Editar Perfil' component={EditarConta} options={{
                tabBarLabel: 'Editar Perfil',
                tabBarIcon: () => (<Icon name="user" size={20} color={'#fff'} />)
            }} />
        </Tab.Navigator>
    )
}



const RotaAutenticacao = () => {
    return (
            <Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "transparent"
                    }
                }}
            >
                 
                <Screen name='Login' component={Login} />
                 <Screen name='Cadastro' component={Cadastro} />
                 <Screen name='EditarConta' component={EditarConta} /> 
                 <Screen name='DetalheJogo' component={DetalheJogo} />   
                <Screen name='Home' component={HomeTabs} />
            </Navigator>
     

    )
};

export default RotaAutenticacao;