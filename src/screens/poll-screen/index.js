import Styled from './styles'
import { View, Text } from 'react-native';

const _tempPollObject = {
  title: 'Enquete 1',
  options: [
    {
      title: 'Opção 1',
      id: 1,
    },
    {
      title: 'Opção 2',
      id: 2,
    },
    {
      title: 'Opção 3',
      id: 3,
    },
    {
      title: 'Opção 4',
      id: 4,
    },
    {
      title: 'Opção 5',
      id: 5,
    }
  ]
}

const PollScreen = () => {
  
  return (
    <Styled.PollView>
      {_tempPollObject.options.map((option) => {
        return (
          <Styled.ButtonInnerContainer>
            <Styled.StyledPressableText>{option.title}</Styled.StyledPressableText>
          </Styled.ButtonInnerContainer>
        )
      })}
    </Styled.PollView>
  );
};

export default PollScreen;
