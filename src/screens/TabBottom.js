import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileNavigation from './profile/ProfileNavigation';
import ProjectTopTab from './project/ProjectTopTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
/* const Container = createStackNavigator(); */
const Tab = createBottomTabNavigator();

export default function TabBottom({navigation, route}) {
  console.log(route);
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => {
          let iconName;
          let color;

          if (route.name === 'ProjectTopTab') {
            (iconName = 'file-check'),
              (color = focused ? '#21b532' : '#a19f9f');
          } else if (route.name === 'ProfileNavigation') {
            (iconName = 'account-circle'),
              (color = focused ? '#21b532' : '#a19f9f');
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen
        name="ProjectTopTab"
        component={ProjectTopTab}
        options={{title: 'Project'}}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{title: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}
/* <Container.Navigator>
        <Container.Screen name="screen" component/>
    </Container.Navigator> */
/* const Sreen = () => {
return (
  <Tab.Navigator
        backBehavior="none"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            let color;

            if (route.name === 'ProjectTopTab') {
              (iconName = 'file-check'),
                (color = focused ? '#21b532' : '#a19f9f');
            } else if (route.name === 'Profile') {
              (iconName = 'account-circle'),
                (color = focused ? '#21b532' : '#a19f9f');
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={24} color={color} />;
          },
        })}>
        <Tab.Screen
          name="ProjectTopTab"
          component={ProjectTopTab}
          options={{headerTitle: 'ProjectTopTab'}}
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
)
} */
