import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import styled from "styled-components/native";

const ChatAreaView = styled(SafeAreaView)`
    flex: 1;
    background-color: #06172A;
    padding: 30px 16px 30px 16px;
`;

export const ChatBubble = styled.View`
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background-color: ${({ isUser }) => (isUser ? '#DCF8C5' : '#E5E5EA')};
  border-radius: 20px;
  margin: 5px 10px;
  max-width: 70%;
  padding: 10px;
`;

export const ChatMessage = styled.Text`
  color: ${({ isUser }) => (isUser ? '#000000' : '#000000')};
  font-size: 16px;
  font-weight: ${({ isUser }) => (isUser ? 'bold' : 'normal')};
`;

export const ChatSender = styled.Text`
  color: #8c8c8e;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const UserImage = styled.Image`
    width: 52px;
    height: 52px;
    border-radius: 26px;
`;


export default {
    ChatAreaView,
    ChatBubble,
    ChatMessage,
    ChatSender,
    UserImage
};