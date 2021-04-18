import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {firebase} from '../firebase/config';
import Login from './Login';
import {useStoreActions, useStoreState} from 'easy-peasy';
export default function Profile({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const isLogged = useStoreState((state) => state.isLogged);
  const setIsLogged = useStoreActions((actions) => actions.setIsLogged);

  function onAuthStateChanged(user) {
    setIsLogged(user);
    if (initializing) setInitializing(false);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isLogged ? 'Profile' : 'Login',

      headerRight: () =>
        isLogged ? (
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('ProfileSetting')}>
            <Icon name="cog-outline" size={24} color="white" />
          </TouchableOpacity>
        ) : null,
    });
  }, [isLogged]);
  useEffect(() => {
    const sub = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return sub;
  }, [isLogged]);
  if (initializing) return null;
  if (!isLogged) {
    return <Login navigation={navigation} />;
  }
  return (
    <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
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
        <Text
          style={{paddingHorizontal: 22, paddingVertical: 10, fontSize: 15}}>
          Description
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 22,
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="link-variant"
            size={24}
            color="black"
            style={{marginRight: 10}}
          />
          <Text>Google.com</Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 22,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: '#1B9284', fontSize: 18}}>Edit</Text>
        </TouchableOpacity>
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
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 22,
          paddingVertical: 14,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text>All activity</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#969696" />
      </TouchableOpacity>
    </View>
  );
}
/* 
<Text style={{backgroundColor: 'white'}}>sad</Text>
*/
