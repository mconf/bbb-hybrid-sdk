import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import HomeScreen from './src/screens/home-screen';
import PollScreen from './src/screens/poll-screen';
import ChatScreen from './src/screens/chat-screen';
import useJoinMeeting from './src/graphql/hooks/use-join-meeting';

const App = () => {
  const Stack = createNativeStackNavigator();
  const LoginObject = useJoinMeeting();
  const {
    graphqlClient,
    userId,
    userName,
    sessionToken,
    userAuthToken,
    loginStage
  } = LoginObject;

  if (graphqlClient) {
    return (
      <ApolloProvider client={graphqlClient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Who am I?
            {userName}
            (
            {userId}
            )
          </Text>
        </View>
      </ApolloProvider>

    );
  }

  if (sessionToken === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Param sessionToken missing
        </Text>
      </View>
    );
  }

  if (loginStage !== 4) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
