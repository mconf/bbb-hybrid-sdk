import React, {useState} from 'react';
import S from './styles';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';

const SessionQRModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
    <S.OpenModalButtonContainer>
      <S.OpenModalButton
        onPress={() => setModalVisible(true)}>
        {/*Add QR code icon later*/}
        <Text style={{fontSize: 12, fontWeight: 600}}>QR CODE</Text>
      </S.OpenModalButton>
    </S.OpenModalButtonContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <S.ModalContainer>
            <S.CloseButtonContainer>
                <S.CloseButton onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{fontSize: 24, fontWeight: 600}}>X</Text>
                </S.CloseButton>
            </S.CloseButtonContainer>
            <S.ModalTitleContainer>
                <S.ModalTitle>Acesse {props.title}</S.ModalTitle>
            </S.ModalTitleContainer>
            <S.ImageContainer>
                {/*Using mocked image just for prototyping */}
                <Image
                    source={require('../../assets/generic-QR-code.jpg')}
                    style={{width: 185, height: 185}}
                />
            </S.ImageContainer>
          </S.ModalContainer>
        </View>
      </Modal>
    </View>
  );
};
export default SessionQRModal;