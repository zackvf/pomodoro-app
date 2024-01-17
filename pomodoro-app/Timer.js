import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setTimerRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds} seconds</Text>
      <View style={styles.buttons}>
        <Button title="start" onPress={startTimer} />
        <Button title="stop" onPress={stopTimer} />
        <Button title="reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

// Does this component need it's own styles?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default Timer;