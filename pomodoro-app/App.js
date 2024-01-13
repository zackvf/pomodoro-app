// TODO:
// - [x] create an actual timer to use with the countdown
// - [] connect the timer component to the main app component (import)
// - [] improve the app design, namely adding more color/aesthetics (lower priority than base functionality)
// - [] add todo list underneath timer (just pull from todo app)
// - [] add individual timers for each user-added todo (trackers for how long each task took, which are separate from the general timer available at all times/without adding tasks)

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Timer from './Timer.js';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Pomodoro Timer</Text>
    //   <StatusBar style="auto" />
    //   <Text style={styles.countdown_text}>{count}</Text>
    //   <Button title='start countdown' onPress={beginCountdown}></Button>
    // </View>
    <Timer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdown_text: {
    backgroundColor: '#000',
    color: '#80ffff',
    fontSize: 36,
    padding: 15
  },
  button: {
    backgroundColor: '##1aff8c',
    padding: 10
  }
});
