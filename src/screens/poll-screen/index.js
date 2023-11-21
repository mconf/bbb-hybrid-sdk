import React, { useState } from 'react';
import Styled from './styles'

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
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (option) => {
    setSelectedOption(option);
  }
  
  return (
    <Styled.PollView>
      <Styled.styledPollTitle>{_tempPollObject.title}</Styled.styledPollTitle>
      {_tempPollObject.options.map((option) => {
        return (
          <Styled.ButtonInnerContainer key={option.id} onPress={() => handlePress(option.id)} checked={selectedOption === option.id}>
            <Styled.StyledPressableText checked={selectedOption === option.id}>{option.title}</Styled.StyledPressableText>
          </Styled.ButtonInnerContainer>
        )
      })}
    </Styled.PollView>
  );
};

export default PollScreen;
