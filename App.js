import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Todo, Done } from './tabs';

import { TODO_BLUE_ICON, DONE_BLUE_ICON } from './assets/tabs';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, source) => {
  return (
    <Image
      style={{
        width: focused ? 20 : 16,
        height: focused ? 20 : 16,
      }}
      source={source}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={
            {
              tabBarIcon: ({ focused }) => TabBarIcon(focused, TODO_BLUE_ICON)
            }
          } 
        />
        <Tab.Screen
          name="Done"
          component={Done}
          options={
            {
              tabBarIcon: ({ focused }) => TabBarIcon(focused, DONE_BLUE_ICON)
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
