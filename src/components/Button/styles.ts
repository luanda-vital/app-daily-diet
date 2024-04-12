import { TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'SOLID' | 'OUTLINE';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 24px;
  gap: 12px;

  border: 1px solid;
  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${ type === 'SOLID' ? theme.COLORS.GRAY_2 : 'transparent' };
    border-color: ${ type === 'SOLID' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1 };
  `};
`

export const Text = styled.Text <Props>`
  ${({ theme, type }) => css`
    color: ${ type === 'SOLID' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`

export const Icon = styled(Plus).attrs(({ }) => ({
    size: 20,
  }))<Props>`

  color: ${({ theme, type }) => type === 'SOLID' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1 };
`;