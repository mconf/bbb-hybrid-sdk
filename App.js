import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import HomeScreen from './src/screens/home-screen';
import PollScreen from './src/screens/poll-screen';
import ChatScreen from './src/screens/chat-screen';
import useJoinMeeting from './src/graphql/hooks/use-join-meeting';
import CurrentUser from './src/graphql/collections/current-user';
import MeetingInfo from './src/graphql/collections/meeting-info';

const App = () => {
  const Stack = createNativeStackNavigator();
  const LoginObject = useJoinMeeting();
  const {
    graphqlClient,
    sessionToken,
    userAuthToken,
    loginStage
  } = LoginObject;

  if (loginStage !== 4 || !graphqlClient || sessionToken === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ApolloProvider client={graphqlClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CurrentUser"
            options={{
              title: 'CurrentUser'
            }}
          >
            {() => <CurrentUser userAuthToken={userAuthToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="MeetingInfo"
            options={{
              title: 'MeetingInfo'
            }}
          >
            {() => <MeetingInfo />}
          </Stack.Screen>
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

    </ApolloProvider>
  );
};

export default App;
