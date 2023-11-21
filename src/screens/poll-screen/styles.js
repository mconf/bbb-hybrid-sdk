import Pressable from "../../components/pressable";
import styled from 'styled-components/native';
import { View } from "react-native";
import { Text } from "react-native";
import {css} from 'styled-components';

const ButtonInnerContainer = styled(Pressable).attrs(() => ({
    pressStyle: {
      opacity: 0.8,
    },
  }))`
    ${() => css`
      justify-content: center;
      display: flex;
      border-radius: 4px;
      min-height: 40px;
      background-color: white;
    `}
`;

const StyledPressableText = styled(Text)`
    ${() => css`
        color: #28282D;
        font-size: 21px;
        font-weight: medium;
        text-align: center;
    `}
`;

const PollView = styled(View)`
    ${() => css`
        background-color: #06172A;
        height: 100%;
        padding: 16px 24px;
    `}
`;

export default {
    ButtonInnerContainer,
    StyledPressableText,
    PollView
};