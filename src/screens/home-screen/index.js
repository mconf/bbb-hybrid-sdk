import s from './styles'
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/card';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <s.Container>
      <s.LineContainer>
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
      </s.LineContainer>
      <s.LineContainer>
        <Card
          title="Chat"
          icon="poll"
          onPress={() => navigation.navigate('PollScreen')}
        />
        <Card
          title="Apresentacao"
          icon="poll"
          onPress={() => navigation.navigate('PollScreen')}
        />
      </s.LineContainer>
    </s.Container>
  );
};

export default HomeScreen;
