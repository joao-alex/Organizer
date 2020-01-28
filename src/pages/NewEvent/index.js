import React from 'react';
import { View, Text, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Calendar from 'expo-calendar';

import styles from './styles';

export default function NewEvent() {
  return (
    <LinearGradient colors={['#5411d9', '#7314a3', '#9c0b99']} style={styles.container}>
        <View style={styles.form} on>
            <Text>oi tudo bem</Text>
            <Switch trackColor={'#7314a3'}/>
        </View>
    </LinearGradient>
  );
}
