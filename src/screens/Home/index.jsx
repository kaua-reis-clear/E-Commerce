import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filters } from '../../components'
import style from './style'

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <Filters />
    </SafeAreaView>
  );
}
