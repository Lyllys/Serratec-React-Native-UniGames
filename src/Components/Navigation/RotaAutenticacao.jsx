import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../../Screens/Login';
import Home from '../../Screens/Home';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {Navigator , Screen} = createStackNavigator() ; 
const Tab = createBottomTabNavigator();

const HomeTabs = () =>{
    return(
        <Tab.Navigator initialRouteName='Home'
    tabBarOptions={{
		activeTintColor: '#fff',
        style:{backgroundColor:'#50C' , height:55, borderTopColor: '#fff', paddingBottom: 5,borderTopWidth:1, borderRadius: 30, marginHorizontal:10, marginBottom: 20}
		
	}}
        sceneContainerStyle={{backgroundColor:['#fff']}}
       
       >
            <Tab.Screen name='Home'component={Home} options={{
                tabBarLabel: 'Início',
                tabBarIcon: () => (<Icon name="compass" size={20} color={'#fff'} />)
            }}/>
             <Tab.Screen name='Em breve'component={Home} options={{
                tabBarLabel: 'Em breve',
                tabBarIcon: () => (<Icon name="star" size={20} color={'#fff'} />)
            }}/>
             <Tab.Screen name='Downloads'component={Home} options={{
                tabBarLabel: 'Downloads',
                tabBarIcon: () => (<Icon name="user" size={20} color={'#fff'} />)
            }}/>
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
           <Screen name='Home' component={HomeTabs}/>
       </Navigator>
   )
};

export default RotaAutenticacao; 