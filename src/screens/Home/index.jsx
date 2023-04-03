import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './style'

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Home</Text>
    </SafeAreaView>
  );
}
