import { gql, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';

const MeetingInfo = () => {
  const { loading, error, data } = useQuery(
    gql`query {
      meeting {
        meetingId
        createdTime
        disabledFeatures
        duration
        extId
        html5InstanceId
        isBreakout
        maxPinnedCameras
        meetingCameraCap
        name
        notifyRecordingIsOn
        presentationUploadExternalDescription
        presentationUploadExternalUrl
      }
    }`
  );

  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);

  if (loading || !error || !data) {
    return (
      <Text> Loading...</Text>
    );
  }

  return (
    <View style={{ borderWidth: 1 }}>
      <View style={{ flex: 1 }}>
        {data.meeting.map((curr) => {
          console.log('meeting', curr);
          return (
            <View key={curr.meetingId} style={{ flexDirection: 'row' }}>
              {/* <Text>{user.userId}</Text> */}
              <Text>
                Name
                {curr.name}
              </Text>
              <Text>
                extId
                {curr.extId}
              </Text>
              <Text>
                duration
                {curr.duration}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MeetingInfo;
