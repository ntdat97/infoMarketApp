import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ProfileViewer() {
  return (
    <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
          <View style={{flex: 3, alignItems: 'center', paddingVertical: 10}}>
            <Image
              source={require('../../../assets/avatar.png')}
              style={{width: 80, height: 80}}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              flex: 7,
              justifyContent: 'center',
            }}>
            <Text style={{paddingBottom: 5, fontSize: 18}}>
              email@gmail.com
            </Text>
            <Text style={{fontSize: 18, color: '#868483'}}>87 reviews</Text>
          </View>
        </View>
      </View>
      <Text style={{paddingHorizontal: 22, paddingVertical: 10}}>
        Project Activites
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 22,
          paddingVertical: 10,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: '#EEEEEE',
        }}>
        <View style={{}}>
          <Text style={{paddingVertical: 4}}>12</Text>
          <Text style={{paddingVertical: 4}}>Sent</Text>
        </View>
        <View style={{}}>
          <Text style={{paddingVertical: 4}}>5</Text>
          <Text style={{paddingVertical: 4}}>Approved</Text>
        </View>
        <View style={{}}>
          <Text style={{paddingVertical: 4}}>0</Text>
          <Text style={{paddingVertical: 4}}>Created</Text>
        </View>
      </View>
    </View>
  );
}
/* 
<Text style={{backgroundColor: 'white'}}>sad</Text>
*/
