import Styled from './styles';
import { Avatar } from 'react-native-paper';

const Card = (props) => {
  const { title, onPress, icon } = props;

  console.log('Card', props);

  return (
    <Styled.ContainerCard onPress={onPress}>
      <Avatar.Icon
        icon={icon}
        size={32}
        color={'#FFFFFF'}
        style={{ backgroundColor: '#008C95' }}
      />
      <Styled.Title>{title}</Styled.Title>
    </Styled.ContainerCard>
  );
};

export default Card;
