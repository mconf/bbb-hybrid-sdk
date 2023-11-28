import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import useChatPublicMessages from '../../graphql/collections/chat-messages';
import S from './styles';
import IconButtonComponent from '../../components/IconButton';

const ChatScreen = () => {
  const chatMessagesList = useChatPublicMessages();
  const [messageText, setMessageText] = useState('');
  const scrollViewRef = useRef();

  const handleMessageSend = () => {
    if (messageText.trim() === '') {
      return;
    }

    const newMessage = {
      id: chatMessagesList.length + 1,
      text: messageText.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessageText('');
  };

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [chatMessagesList.lenght]);

  return (
    <S.ChatAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        inverted
      >
        {chatMessagesList.map((message) => (
          <View key={message.messageId}>
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
                    <S.ChatSender>{message.senderName}</S.ChatSender>
                    <S.ChatMessage>{message.message}</S.ChatMessage>
                  </S.ChatBubble>
                </View>
              </S.UserWrapper>
            )}
          </View>
        ))}
      </ScrollView>
      <S.ChatInputWrapper>
        <S.ChatInput
          placeholder="Send your message"
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
