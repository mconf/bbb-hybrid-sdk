import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { css } from 'styled-components';
import Pressable from '../../components/pressable';

const ButtonInnerContainer = styled(Pressable).attrs(({ checked }) => ({
  justifyContent: 'center',
  display: 'flex',
  borderRadius: 4,
  height: 40,
  marginBottom: 16,
  backgroundColor: checked ? '#008C95' : 'white',
  pressStyle: {
    opacity: 0.8,
  }
}))``;

const StyledPressableText = styled(Text)`
  color: ${(props) => (props.checked ? 'white' : 'black')};
  font-size: 21px;
  font-weight: medium;
  text-align: center;
`;

const PollView = styled(View)`
    ${() => css`
        background-color: #06172A;
        height: 100%;
        padding: 16px 24px;
    `}
`;

const PollTitle = styled(Text)`
    color: white;
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 24px;
    text-align: center;
    font-weight: bold;
`;

export default {
  ButtonInnerContainer,
  StyledPressableText,
  PollView,
  PollTitle,
};
