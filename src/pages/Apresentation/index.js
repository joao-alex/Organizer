import React,{useState,useEffect} from 'react';
import { Text, TextInput,KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function Apresentation({navigation}) {
  const [name,setName] = useState('');
  const [load,setLoad] = useState(false);
  async function handleName(){
    await AsyncStorage.setItem('@name',name);
    navigation.navigate('Main',{title:name});
  }

  useEffect(()=>{
    async function getName(){
      const n = await AsyncStorage.getItem('@name');
      if(n)
        navigation.navigate('Main',{title:n});
      else
        setLoad(true);
    }
    getName();
  },[])

  return(
    <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
      <LinearGradient colors={['#5411d9', '#7314a3', '#9c0b99']} style={styles.container}>
          {load &&(
            <>
              <Text style={styles.textName}>Qual é o seu nome?</Text>
              <TextInput style={styles.inputName} value={name} onChangeText={setName} returnKeyType='go' onEndEditing={handleName}/>
            </>
          )}
      </LinearGradient>
    </KeyboardAvoidingView>
    
  );
}
