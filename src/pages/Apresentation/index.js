import React from 'react';
import { View, Text, Switch, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function Apresentation() {
  return (
    <LinearGradient colors={['#5411d9', '#7314a3', '#9c0b99']} style={styles.container}>
        <Text style={styles.textName}>Qual é o seu nome?</Text>
        <TextInput style={styles.inputName}/>
    </LinearGradient>
  );
}
