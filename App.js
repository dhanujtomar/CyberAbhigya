import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
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
