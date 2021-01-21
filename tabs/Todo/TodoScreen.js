import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { TODO_BLACK_ICON } from '../../assets/tabs';

const Stack = createStackNavigator();

const TodoScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Todo'
        component={Container}
        options={{
          title: 'Todo'
        }}
      />
  </Stack.Navigator>
  )
}

const Container = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 24,
          height: 24,
        }}
        source={TODO_BLACK_ICON}
      />
      <Text>Todo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoScreen;