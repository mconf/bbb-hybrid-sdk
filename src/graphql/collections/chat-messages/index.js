import { gql } from '@apollo/client';
import usePatchedSubscription from '../usePatchedSubscription';

const useChatPublicMessages = () => {
  const { data } = usePatchedSubscription(
    gql`subscription {
      chat_message_public(limit: 20) {
        chatId
        chatEmphasizedText
        correlationId
        message
        messageId
        senderId
        senderName
        senderRole
      }
    }`
  );

  const getChatMessages = () => {
    return data.map((curr) => {
      return ({
        senderName: curr.senderName,
        message: curr.message,
        messageId: curr.messageId
      });
    });
  };

  return getChatMessages();
};

export default useChatPublicMessages;
