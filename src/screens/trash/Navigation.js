import React from 'react';
import {StyleSheet, Text, View, Button, Alert, LogBox} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import TabBottom from '../TabBottom';
import Profile from './profile/Profile';
import ProfileNavigator from './profile/ProfileNavigation';
export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="TabBottom"
      mode="modal"
      headerMode="none">
      <Stack.Screen
        name="TabBottom"
        component={TabBottom}
        options={{
          headerTitle: 'Profile',
        }}
        /* options={{
                    headerShown: 'none'
                }} */
      />
      <Stack.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          headerTitle: 'Profile',
        }}
        /* options={{
                    headerShown: 'none'
                }} */
      />
      {/*   <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerTitle: 'Profile',
                }}
            />
            <Stack.Screen name="Project" component={Project}
                options={{
                    headerTitle: 'Project',
                }}
            /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
