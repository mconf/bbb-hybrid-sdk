import styled from 'styled-components/native';
import { css } from 'styled-components';
import Pressable from '../pressable';

const Title = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
`;

const ContainerCard = styled(Pressable).attrs(() => ({
  pressStyle: {
    opacity: 0.8,
  },
}))`
  ${() => css`
    display: flex;
    background-color: #008C95;
    padding: 24px;
    margin: 8px;
    border-radius: 8px;
  `}
`;

export default {
  ContainerCard,
  Title,
};
