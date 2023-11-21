import Styled from './styles';

const Card = (props) => {
  const { title, onPress, icon } = props;

  return (
    <Styled.ContainerCard onPress={onPress}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.ContainerCard>
  );
};

export default Card;
