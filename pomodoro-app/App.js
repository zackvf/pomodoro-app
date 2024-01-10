// TODO:
// - [] create an actual timer to use with the countdown
// - [] improve the app design, namely adding more color/aesthetics (lower priority than base functionality)
// - [] add todo list underneath timer (just pull from todo app)
// - [] add individual timers for each user-added task (trackers for how long each task took, which are separate from the general timer available at all times/without adding tasks)

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(25);
  
  const beginCountdown = () => {
      setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text>Pomodoro Timer</Text>
      <StatusBar style="auto" />
      <Text style={styles.countdown_text}>{count}</Text>
      <Button title='start countdown' onPress={beginCountdown}></Button>
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
