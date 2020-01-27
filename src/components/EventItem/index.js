import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function EventItem() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Titulo do evento</Text>
        <Text style={styles.time}>O dia todo</Text>
        <Text style={styles.description}>Descrição bla bla bla</Text>
    </View>
  );
}
