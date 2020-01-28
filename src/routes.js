import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MaterialIcons } from '@expo/vector-icons'

import Main from './pages/Main'
import NewEvent from './pages/NewEvent';
import Apresentation from './pages/Apresentation';
import { TouchableOpacity } from 'react-native';

const date = new Date();

export default createAppContainer(
    createStackNavigator({
        Apresentation:{
            screen:Apresentation,
            navigationOptions:{
                title:'Bem-vindo!'
            }
        },
        Main:{
            screen:Main,
            navigationOptions:({navigation})=>{
                return{
                title: date.getHours()<12 ? 'Bom dia! ;)' : date.getHours()<18? 'Boa tarde! ;)' : 'Boa noite! ;)',
                headerRight: () => (<TouchableOpacity onPress={()=>{navigation.navigate('NewEvent')}}>
                <MaterialIcons name="add" size={35} color="#fff" style={{marginRight:5}}/>
                </TouchableOpacity>)
            }}
        },
        NewEvent:{
            screen:NewEvent,
            navigationOptions:{
                title: 'Novo evento'
            }
        }

        
    },{
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#5411d9'
            },
            
        }    
    })
)
