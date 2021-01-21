import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TodoScreen, DoneScreen } from './tabs';
import { TODO_BLUE_ICON, TODO_GREY_ICON, DONE_BLUE_ICON, DONE_GREY_ICON } from './assets/tabs';

const Tab = createBottomTabNavigator();

const routes = [
  {
    name: 'Todo',
    component: TodoScreen,
    icons: {
      active: TODO_BLUE_ICON,
      inactive: TODO_GREY_ICON
    }
  },
  {
    name: 'Done',
    component: DoneScreen,
    icons: {
      active: DONE_BLUE_ICON,
      inactive: DONE_GREY_ICON
    }
  }
]

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {
          routes.map((route) => (
            <Tab.Screen
              key={`tabs--${route.name}`}
              name={route.name}
              component={route.component}
              options={
                {
                  tabBarIcon: ({ focused }) => (
                    <Image
                      source={focused ? route.icons.active : route.icons.inactive}
                      style={{
                        width: focused ? 20 : 16,
                        height: focused ? 20 : 16,
                      }}
                    />
                  )
                }
              }
            />
          ))
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;