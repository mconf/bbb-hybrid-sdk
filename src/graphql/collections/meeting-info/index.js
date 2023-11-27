import { gql, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';

const MeetingInfo = () => {
  // duration
  const { loading, error, data } = useQuery(
    gql`query {
      meeting {
        meetingId
        createdTime
        disabledFeatures
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

  if (loading) {
    return (
      <Text> Loading...</Text>
    );
  }

  return !loading && !error
  && (
    <View style={{ borderWidth: 1 }}>
      <View>
        {data.meeting.map((curr) => {
          console.log('meeting', curr);
          return (
            <View key={curr.meetingId}>
              {/* <Text>{user.userId}</Text> */}
              <Text>
                Name:
                {curr.name}
              </Text>
              <Text>
                createdTime:
                {curr.createdTime}
              </Text>
              <Text>
                isBreakout:
                {curr.isBreakout}
              </Text>
              <Text>
                maxPinnedCameras:
                {curr.maxPinnedCameras}
              </Text>
              <Text>
                meetingId:
                {curr.meetingId}
              </Text>
              <Text>
                notifyRecordingIsOn:
                {curr.notifyRecordingIsOn}
              </Text>
              <Text>
                notifyRecordingIsOn:
                {curr.notifyRecordingIsOn}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MeetingInfo;
