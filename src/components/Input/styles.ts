import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InputTypeProps = 'DEFAULT' | 'TIME' | 'DATE' | 'TEXT_AREA';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;

export const Field = styled(TextInput)`
  border-radius: 6px;
  padding: 12px;

  ${({ theme }) => css`
    border: ${ theme.COLORS.GRAY_5} 1px solid;

    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
  `};
`;
