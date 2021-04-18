import React from 'react';
import {Text, Alert, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Project from './Project';
import Profile from '../profile/Profile';
import ProfileViewer from './ProfileViewer';
import ProjectPhotoTaker from './ProjectPhotoTaker';
import Project_MyProject from './Project_MyProject';
import ProjectCreate from './ProjectCreate';
import ProjectDetail from './ProjectDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBackButton} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useEffect} from 'react';
const Container = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Screens = ({navigation}) => {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        labelStyle: {textTransform: 'none'},
      }}>
      <Tab.Screen
        name="Projects"
        /*         component={Project}
        options={{title: 'Awesome app'}} */
        children={() => <Project navigation={navigation} />}
        options={{
          tabBarLabel: 'All Projects',
        }}
      />
      <Tab.Screen
        name="Project_MyProject"
        /* component={Project_MyProject} */
        children={() => <Project_MyProject /* navigation={navigation} */ />}
        options={{
          tabBarLabel: 'My Projects',
        }}
      />
    </Tab.Navigator>
  );
};
export default function ProjectTopTab({navigation, route}) {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: ['Project', undefined].includes(routeName),
    });
  }, [navigation, routeName]);

  return (
    <Container.Navigator
      headerMode="screen"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Container.Screen
        name="Project"
        component={Screens}
        options={({navigation}) => {
          return {
            title: 'Projects',
            headerStyle: {
              backgroundColor: '#006A73',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.navigate('ProjectCreate')}>
                <Icon name="plus" size={32} color="white" />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Container.Screen name="ProjectCreate" component={ProjectCreate} />
      <Container.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{
          headerTitle: 'Project Details',
          title: 'Projects',
          headerStyle: {
            backgroundColor: '#006A73',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
      <Container.Screen name="ProfileViewer" component={ProfileViewer} />
      <Container.Screen
        name="ProjectPhotoTaker"
        component={ProjectPhotoTaker}
      />
    </Container.Navigator>
  );
}
