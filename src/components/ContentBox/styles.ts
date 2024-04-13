import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 20px 20px 0px 0px;
  padding: 32px 24px;
  flex: 1;
  width: 100%;

  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.15;
  shadow-radius: 30px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;