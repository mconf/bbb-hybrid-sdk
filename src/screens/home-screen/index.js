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
            title="Polls"
            onPress={() => navigation.navigate('PollScreen')}
          />
          <Card
            title="Questions"
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
            title="Presentation"
            icon="application-outline"
            onPress={() => navigation.navigate('PollScreen')}
          />
        </S.LineContainer>
        <S.LineContainer>
          <Card
            title="CurrentUser"
            icon="forum"
            onPress={() => navigation.navigate('CurrentUser')}
          />
          <Card
            title="MeetingInfo"
            icon="application-outline"
            onPress={() => navigation.navigate('MeetingInfo')}
          />
        </S.LineContainer>
      </S.OptionContainer>
    </S.HomeScreenContainer>
  );
};

export default HomeScreen;
