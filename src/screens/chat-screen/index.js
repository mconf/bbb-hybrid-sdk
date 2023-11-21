import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native';
import S from './styles';
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
                <View>
                  <View>
                    <S.ChatSender>{message.sender}</S.ChatSender>
                    <S.ChatBubble isUser={true}>
                      <S.ChatMessage isUser={true}>{message.text}</S.ChatMessage>
                    </S.ChatBubble>
                  </View>
                </View>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                  <S.UserImage source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}/>
                  <View>
                    <S.ChatSender>{message.sender}</S.ChatSender>
                    <S.ChatBubble isUser={false}>
                      <S.ChatMessage>{message.text}</S.ChatMessage>
                    </S.ChatBubble>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ flex: 1, height: 40, borderWidth: 1, borderColor: 'gray', margin: 10 }}
            placeholder="Type a message"
            onChangeText={(text) => setMessageText(text)}
            value={messageText}
          />
          <TouchableOpacity onPress={handleMessageSend} style={{ margin: 10 }}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </S.ChatAreaView>
  );
};

export default ChatScreen;