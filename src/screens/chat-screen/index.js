import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import S from './styles';
import IconButtonComponent from '../../components/IconButton';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello, how are you?',
      sender: 'John',
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "I've some news to tell you",
      sender: 'John',
      timestamp: new Date(),
    },
    {
      id: 3,
      text: 'I just arrived Japan!',
      sender: 'John',
      timestamp: new Date(),
    }
  ]);
  const [messageText, setMessageText] = useState('');
  const scrollViewRef = useRef();
  // const svgIcon = icons['send.svg'];

  const handleMessageSend = () => {
    if (messageText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: messageText.trim(),
      sender: 'user',
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

      <ScrollView
        style={{ flex: 1 }}
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        inverted
      >
        {messages.map((message) => (
          <View key={message.id}>
            {message.sender === 'user' ? (
              <S.UserWrapper isUser>
                <View>
                  <S.ChatBubble isUser>
                    <S.ChatSender>{message.sender}</S.ChatSender>
                    <S.ChatMessage isUser>{message.text}</S.ChatMessage>
                  </S.ChatBubble>
                </View>
                <S.UserImage source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} />
              </S.UserWrapper>
            ) : (
              <S.UserWrapper>
                <S.UserImage source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} />
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
        <IconButtonComponent icon="send" size={38} onPress={handleMessageSend} iconColor="#FFFF" containerColor="#008C95" />
      </S.ChatInputWrapper>
    </S.ChatAreaView>
  );
};

export default ChatScreen;
