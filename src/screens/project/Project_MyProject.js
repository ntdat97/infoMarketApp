import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Card from '../component/Card';
export default function Project_MyProject() {
  return (
    <ScrollView
      style={{
        display: 'flex',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Card />
      <View style={{marginBottom: 15}} />
    </ScrollView>
  );
}
