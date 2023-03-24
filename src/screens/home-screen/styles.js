import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View `
    background-color: purple;
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LineContainer = styled.View `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default {
    Container,
    LineContainer
};
