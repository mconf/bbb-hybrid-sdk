import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { gql, useMutation, useSubscription } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

const CurrentUser = ({ userAuthToken }) => {
  const navigation = useNavigation();
  // where is not necessary once user can update only its own status
  // Hasura accepts "now()" as value to timestamp fields
  const [updateUserClientEchoTestRunningAtMeAsNow] = useMutation(gql`
    mutation UpdateUserClientEchoTestRunningAt {
      update_user_current(
          where: {}
          _set: { echoTestRunningAt: "now()" }
        ) {
          affected_rows
        }
    }
`);

  const handleUpdateUserEchoTestRunningAt = () => {
    updateUserClientEchoTestRunningAtMeAsNow();
  };

  const [dispatchUserJoin] = useMutation(gql`
    mutation UserJoin($authToken: String!, $clientType: String!) {
      userJoin(
        authToken: $authToken,
        clientType: $clientType,
      )
    }
`);

  const handleDispatchUserJoin = () => {
    dispatchUserJoin({
      variables: {
        authToken: userAuthToken,
        clientType: 'HTML5',
      },
    });
  };

  const { loading, error, data } = useSubscription(
    gql`subscription {
      user_current {
        userId
        name
        joined
        joinErrorCode
        joinErrorMessage
      }
    }`
  );

  if (!loading && !error) {
    return (
      <View style={{ borderWidth: 1 }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text colSpan={3}>My info</Text>
          </View>
        </View>
        <View>
          {data.user_current.map((curr) => {
            return (
              <View key={curr.userId} style={{ flexDirection: 'column' }}>
                <Text>
                  userId:
                  {curr.userId}
                </Text>
                <Text>
                  name:
                  {curr.name}
                </Text>
                <Text>
                  joined:
                  {curr.joined ? 'Yes' : 'No'}
                  {curr.joined ? '' : (
                    <TouchableOpacity onPress={() => handleDispatchUserJoin()}>
                      <Text>Join Now!</Text>
                    </TouchableOpacity>
                  )}
                </Text>
                <Text>
                  joinErrorCode:
                  {curr.joinErrorCode}
                </Text>
                <Text>
                  joinErrorMessage:
                  {curr.joinErrorMessage}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('MeetingInfo')}>
                  <Text>Acs meeting info page</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text>LOADING</Text>
    </View>
  );
};

export default CurrentUser;
