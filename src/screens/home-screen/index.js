import { useNavigation } from '@react-navigation/native';
import S from './styles';
import SessionQRModal from '../../components/SessionQRModal';
import Card from '../../components/card';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <S.HomeScreenContainer>
      <SessionQRModal title="[Título da Videoconferência]" />
      <S.OptionContainer>
        <S.LineContainer>
          <Card
            icon="poll"
            title="Enquetes"
            onPress={() => navigation.navigate('PollScreen')}
          />
          <Card
            title="Perguntas"
            icon="help"
            onPress={() => navigation.navigate('PollScreen')}
          />
        </S.LineContainer>
        <S.LineContainer>
          <Card
            title="Chat"
            icon="forum"
            onPress={() => navigation.navigate('ChatScreen')}
          />
          <Card
            title="Apresentacao"
            icon="application-outline"
            onPress={() => navigation.navigate('PollScreen')}
          />
        </S.LineContainer>
      </S.OptionContainer>
    </S.HomeScreenContainer>
  );
};

export default HomeScreen;
