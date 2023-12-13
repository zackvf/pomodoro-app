import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
      <Pressable style={styles.button} title='start countdown' onPress={beginCountdown}></Pressable>
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