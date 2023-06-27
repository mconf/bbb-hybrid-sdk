import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native';
import S from './styles';
import IconButtonComponent from '../../components/IconButton';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how are you?",
      sender: "John",
      timestamp: new Date(),
    }
  ]);
  const [messageText, setMessageText] = useState('');
  const scrollViewRef = useRef();
  //const svgIcon = icons['send.svg'];

  const handleMessageSend = () => {
    if (messageText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: messageText.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <S.ChatAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView style={{ flex: 1 }}
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
          inverted>
          {messages.map((message) => (
            <View key={message.id}>
              {message.sender === 'user' ? (
                <S.UserWrapper isUser={true}>
                  <View>
                    <S.ChatBubble isUser={true}>
                      <S.ChatSender>{message.sender}</S.ChatSender>
                      <S.ChatMessage isUser={true}>{message.text}</S.ChatMessage>
                    </S.ChatBubble>
                  </View>
                    <S.UserImage source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}/>
                </S.UserWrapper>
              ) : (
                <S.UserWrapper>
                  <S.UserImage source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}/>
                  <View>
                    <S.ChatBubble isUser={false}>
                      <S.ChatSender>{message.sender}</S.ChatSender>
                      <S.ChatMessage>{message.text}</S.ChatMessage>
                    </S.ChatBubble>
                  </View>
                </S.UserWrapper>
              )}
            </View>
          ))}
        </ScrollView>
        <S.ChatInputWrapper>
          <S.ChatInput
            placeholder="Envie sua mensagem"
            placeholderTextColor="#FFF"
            onChangeText={(text) => setMessageText(text)}
            value={messageText}
          />
          <IconButtonComponent icon={'send'} onPress={handleMessageSend} iconColor={'red'} containerColor={'red'} />
        </S.ChatInputWrapper>
      </KeyboardAvoidingView>
    </S.ChatAreaView>
  );
};

export default ChatScreen;