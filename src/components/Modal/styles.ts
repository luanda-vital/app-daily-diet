import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;

  background-color: 'rgba(0,0,0,0.25)';
`;

export const ModalBox = styled.View`
  padding: 24px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;