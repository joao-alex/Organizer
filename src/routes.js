import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MaterialIcons } from '@expo/vector-icons'

import Main from './pages/Main'
import { TouchableOpacity } from 'react-native';

const date = new Date();

export default createAppContainer(
    createStackNavigator({
        Main:{
            screen:Main,
            navigationOptions:{
                title: date.getHours()<12 ? 'Bom dia! ;)' : date.getHours()<18? 'Boa tarde! ;)' : 'Boa noite! ;)'
            }
        },
        
    },{
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#5411d9'
            },
            headerRight: () => (<TouchableOpacity>
                <MaterialIcons name="add" size={35} color="#fff" style={{marginRight:5}}/>
            </TouchableOpacity>)
        }
    })
)
