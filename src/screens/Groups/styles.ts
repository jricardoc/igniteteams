import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RED_DARK};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #000;
    font-size: 40px;
`;