import React, {useState} from 'react';
import S from './styles';
import {Alert, Modal, Text, View, Image} from 'react-native';
import { Avatar } from 'react-native-paper';

const SessionQRModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
    <S.OpenModalButtonContainer>
      <S.OpenModalButton
        onPress={() => setModalVisible(true)}>
        <Text style={{fontSize: 12, fontWeight: 600}}>QR CODE</Text>
        <Avatar.Icon size={30} color='#008C95' icon="qrcode" style={{backgroundColor: 'white'}} />
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