import styled from 'styled-components/native';

const ModalContainer = styled.View`
  margin: 150px auto auto auto;
  background-color: white;
  border-radius: 12px;
  padding: 0 24px 24px 24px;
`;

const CloseButtonContainer = styled.View`
  margin-top: 18px;
  margin-right: 18px;
  margin-left: auto;
  width: 100%;
`;

const CloseButton = styled.Pressable`
  width: 24px;
  height: 24px;
`;

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
`;

const ModalTitleContainer = styled.View`
  margin: 16px 46px 24px 46px;
`;

const ModalTitle = styled.Text`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
`;

const OpenModalButton = styled.Pressable`
  background: #FFFFFF;
  border-radius: 29.5px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

const OpenModalButtonContainer = styled.View`
  margin: 16px 16px 0 auto;
  max-width: 115px;
  width: 100%;
`;

export default {
  CloseButton,
  CloseButtonContainer,
  ModalContainer,
  ImageContainer,
  ModalTitleContainer,
  ModalTitle,
  OpenModalButton,
  OpenModalButtonContainer
};
