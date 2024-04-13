import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 2px;
  align-items: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_G }px;
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BODY_S }px;
  `};
`;