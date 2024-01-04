import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quiz_Lists from './src/Screens/Quiz_Lists/Quiz_Lists';

export default function App() {
  return (
    <Quiz_Lists></Quiz_Lists>
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
