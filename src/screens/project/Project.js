import React from 'react';
import {ScrollView, View} from 'react-native';
import Card from '../component/Card';

export default function Project({navigation}) {
  return (
    <ScrollView
      style={{
        display: 'flex',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Card navigation={navigation} />
      <Card navigation={navigation} />
      <Card />
      <Card />
      <View style={{marginBottom: 15}} />
    </ScrollView>
  );
}
