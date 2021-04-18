import React from 'react';
import {Text, Alert} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HeaderBackButton} from '@react-navigation/stack';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createMaterialTopTabNavigator();
const ProjectNavigation = createStackNavigator();
export default function ProjectNavigator({navigation}) {
  return (
    <ProjectNavigation.Navigator
      headerMode="none"
      tabBarOptions={{
        labelStyle: {textTransform: 'none'},
      }}>
      <Tab.Screen
        name="Projects"
        component={Project}
        /* options={{title: 'Awesome app'}} */
        /* children={() => <Project navigation={navigation} />} */

        options={{
          tabBarLabel: 'Projects',
        }}
      />
      <Tab.Screen
        name="ProjectDetail"
        /* component={Project_MyProject} */
        children={() => <ProjectDetail navigation={navigation} />}
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
    </ProjectNavigation.Navigator>
  );
}
