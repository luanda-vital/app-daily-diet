import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Field = styled(TextInput)`
  border-radius: 6px;
  padding: 12px;
  height: 48px;

  ${({ theme }) => css`
    border: ${ theme.COLORS.GRAY_5 } 1px solid;

    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BODY_M }px;
  `};
`;
