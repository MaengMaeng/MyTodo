import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { DONE_BLACK_ICON } from '../../assets/tabs';


const Stack = createStackNavigator();

const DoneScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Done'
        component={Container}
        options={{
          title: 'Done'
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
        source={DONE_BLACK_ICON}
      />
      <Text>Done!</Text>
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

export default DoneScreen;