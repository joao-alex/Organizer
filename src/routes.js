import React,{useState,useEffect} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MaterialIcons } from '@expo/vector-icons'

import Main from './pages/Main'
import NewEvent from './pages/NewEvent';
import Apresentation from './pages/Apresentation';
import { TouchableOpacity, AsyncStorage } from 'react-native';




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
            navigationOptions: ({navigation})=>{
                const date = new Date();
                const name= navigation.getParam('title')
                return{
                title: date.getHours()<12 ? `Bom dia, ${name}! ;)` : date.getHours()<18? `Boa tarde, ${name}! ;)` : `Boa noite, ${name}! ;)`,
                headerRight: () => (<TouchableOpacity onPress={()=>{navigation.navigate('NewEvent')}}>
                <MaterialIcons name="add" size={35} color="#fff" style={{marginRight:5}}/>
                </TouchableOpacity>),
                headerLeft:()=>null
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
            
        }, 
    })
)
