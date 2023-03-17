import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/card';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Card
        title="Enquetes"
        icon="poll"
        onPress={() => navigation.navigate('PollScreen')}
      />
    </View>
  );
};

export default HomeScreen;
