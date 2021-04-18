import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile';
import Login from './Login';
import ProfileHome from './ProfileHome';
import ProfileSetting from './ProfileSetting';
import {useStoreActions, useStoreState} from 'easy-peasy';

export default function ProfileNavigation({navigation}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      mode="modal"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#006A73',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
      <Stack.Screen name="ProfileHome" component={ProfileHome} />
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
/* {/*   <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerTitle: 'Profile',
                }}
            />
            <Stack.Screen name="Project" component={Project}
                options={{
                    headerTitle: 'Project',
                }}
            /> */
