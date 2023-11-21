import styled from 'styled-components/native';

const HomeScreenContainer = styled.View `
    background-color: #06172A;
`;

const OptionContainer = styled.View `
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 120px;
`;
const LineContainer = styled.View `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default {
    OptionContainer,
    LineContainer,
    HomeScreenContainer
};
