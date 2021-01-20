import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

import { DONE_BLACK_ICON } from '../../assets/tabs';

const Done = () => {
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

export default Done;