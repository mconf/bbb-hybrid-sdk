import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen';
import PollScreen from './src/screens/poll-screen';
import ChatScreen from './src/screens/chat-screen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={HomeScreen}
          options={{
            title: 'My conference'
          }}
        />
        <Stack.Screen
          name="PollScreen"
          component={PollScreen}
          options={{
            title: 'Poll'
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            title: 'Chat'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
