import React, { useState } from 'react';
import Styled from './styles';

const _tempPollObject = {
  title: 'What is better: to be born good or to overcome your evil nature through great effort?',
  options: [
    {
      title: 'Born good',
      id: 1,
    },
    {
      title: 'Overcome your evil nature through great effort',
      id: 2,
    }
  ]
};

const PollScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (option) => {
    setSelectedOption(option);
  };

  return (
    <Styled.PollView>
      <Styled.PollTitle>
        {_tempPollObject.title}
      </Styled.PollTitle>
      {_tempPollObject.options.map((option) => {
        return (
          <Styled.ButtonInnerContainer
            key={option.id}
            onPress={() => handlePress(option.id)}
            checked={selectedOption === option.id}
          >
            <Styled.StyledPressableText
              checked={selectedOption === option.id}
            >
              {option.title}
            </Styled.StyledPressableText>
          </Styled.ButtonInnerContainer>
        );
      })}
    </Styled.PollView>
  );
};

export default PollScreen;
