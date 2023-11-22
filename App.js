import React, { useState, useEffect } from 'react';
import { Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import HomeScreen from './src/screens/home-screen';
import PollScreen from './src/screens/poll-screen';
import ChatScreen from './src/screens/chat-screen';

// Function to parse query parameters from a URL
const parseQueryString = (url) => {
  const queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }

  const params = {};
  const keyValuePairs = queryString.split('&');

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split('=');
    params[key] = decodeURIComponent(value || '');
  });

  return params;
};

const getHostFromUrl = (url) => {
  const regex = /^(?:[^:\n]+:\/\/)?([^:#/\n]*)/;
  const match = url.match(regex);
  const host = match ? match[1] : null;
  return host;
};

const App = () => {
  const Stack = createNativeStackNavigator();
  const [sessionToken, setSessionToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAuthToken, setUserAuthToken] = useState(null);
  const [graphqlClient, setGraphqlClient] = useState(null);
  const [enterApiResponse, setEnterApiResponse] = useState(null);
  // 0 -> request sessionToken - get
  // 1 -> join with session token - get
  // 2 -> call api enter
  // 3 -> connect graphql server
  const [loginStage, setLoginStage] = useState(0);
  const [urlWithSessionId, setUrlWithSessionId] = useState(null);
  const [host, setHost] = useState('');

  const url = 'https://bbb30.elos.dev/bigbluebutton/api/join?fullName=User+3526825&meetingID=random-1396335&password=mp&redirect=true&checksum=4171552dc9fa9c22ecf1825872b5e979a8a6852a';

  async function requestSessionToken() {
    fetch(`${url}`)
      .then((data) => {
        if (data.status === 200) {
          setUrlWithSessionId(data.url);
          setSessionToken(parseQueryString(data.url).sessionToken);
          setHost(getHostFromUrl(url));
          setLoginStage(1);
          console.log('DONE STAGE 0');
        }
      });
  }

  async function joinWithSessionToken() {
    fetch(`${urlWithSessionId}`)
      .then((data) => {
        if (data.status === 200) {
          setLoginStage(2);
          console.log('DONE STAGE 1');
        }
      });
  }

  async function callApiEnter() {
    fetch(`https://${host}/bigbluebutton/api/enter/?sessionToken=${sessionToken}`)
      .then((response) => response.json())
      .then((data) => {
        setEnterApiResponse(data.response.returncode);
        if (data?.response?.internalUserID) {
          setUserId(data.response.internalUserID);
          setUserName(data.response.fullname);
          setUserAuthToken(data.response.authToken);
          setLoginStage(3);
          console.log('DONE STAGE 2');
        }
      });
  }

  async function connectGraphqlServer() {
    if (enterApiResponse !== 'SUCCESS') {
      return;
    }

    console.log(`Creating graphql socket with token ${sessionToken}`);
    const wsLink = new WebSocketLink(
      new SubscriptionClient(`wss://${`${host}`}/v1/graphql`, {
        reconnect: true,
        timeout: 30000,
        connectionParams: {
          headers: {
            'X-Session-Token': sessionToken,
            'json-patch-supported': 'true'
          }
        }
      })
    );

    setGraphqlClient(new ApolloClient({ link: wsLink, cache: new InMemoryCache() }));
    console.log('DONE STAGE 3');
  }

  useEffect(() => {
    switch (loginStage) {
      case 0:
        requestSessionToken();
        break;
      case 1:
        joinWithSessionToken();
        break;
      case 2:
        callApiEnter();
        break;
      case 3:
        connectGraphqlServer();
        break;
      default:
        console.log('error');
    }
  }, [loginStage]);

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );

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
