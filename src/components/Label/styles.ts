import styled, { css } from 'styled-components/native';

export const Container = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_XS }px;
  `};
`;