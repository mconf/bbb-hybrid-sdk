import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const ChatAreaView = styled(SafeAreaView)`
    flex: 1;
    background-color: #06172A;
    padding: 30px 16px 30px 16px;
`;

export const ChatBubble = styled.View`
  display: flex;
  flex-direction: column;
  align-items: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin: 0 10px;
  max-width: 90%;
`;

export const ChatMessage = styled.Text`
  color: #C8C9C7;
  font-size: 16px;
  font-weight: ${({ isUser }) => (isUser ? 'bold' : 'normal')};
`;

export const ChatSender = styled.Text`
  text-align: ${({ isUser }) => (isUser ? 'right' : 'left')};
  color: #FFFFFF;
  font-size: 12px;
  margin-bottom: 5px;
  width: 100%;
`;

export const UserImage = styled.Image`
    width: 52px;
    height: 52px;
    border-radius: 26px;
`;

export const UserWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
    align-items: flex-start;
`;

export const ChatInput = styled(TextInput)`
  border: 1px solid #667080;
  border-radius: 4px;
  padding: 16px 8px 16px 16px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  max-height: 51px;
  max-width: 280px;
  width: 100%;
`;

export const ChatInputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 32px 0;
`;

export const ChatSendButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #008C95;
  justify-content: center;
  align-items: center;
`;

export default {
    ChatAreaView,
    ChatBubble,
    ChatMessage,
    ChatSender,
    UserImage,
    UserWrapper,
    ChatInput,
    ChatInputWrapper,
    ChatSendButton
};