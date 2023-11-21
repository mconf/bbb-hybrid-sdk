import S from './styles'
import { useNavigation } from '@react-navigation/native';
import SessionQRModal from '../../components/SessionQRModal';
import Card from '../../components/card';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <S.HomeScreenContainer>
      <SessionQRModal title={'[Título da Videoconferência]'} />
      <S.OptionContainer>
        <S.LineContainer>
          <Card
            title="Enquetes"
            icon="poll"
            onPress={() => navigation.navigate('PollScreen')}
          />
          <Card
            title="Perguntas"
            icon="poll"
            onPress={() => navigation.navigate('PollScreen')}
          />
        </S.LineContainer>
        <S.LineContainer>
          <Card
            title="Chat"
            icon="poll"
            onPress={() => navigation.navigate('ChatScreen')}
          />
          <Card
            title="Apresentacao"
            icon="poll"
            onPress={() => navigation.navigate('PollScreen')}
          />
        </S.LineContainer>
      </S.OptionContainer>
    </S.HomeScreenContainer>
  );
};

export default HomeScreen;
