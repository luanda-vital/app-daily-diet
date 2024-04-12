import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type SelectStyleProps = {
  isActive: boolean,
  type: boolean, 
}

export const Container = styled(TouchableOpacity) <SelectStyleProps>`
  ${({ theme, isActive, type }) => isActive && type && css`
    border: ${ theme.COLORS.GREEN_DARK } 1px solid;
    background-color: ${ theme.COLORS.GREEN_LIGHT };
  `};

  ${({ theme, isActive, type }) => isActive && type===false && css`
    border: ${ theme.COLORS.RED_DARK } 1px solid;
    background-color: ${ theme.COLORS.RED_LIGHT };
  `};

  ${({ theme, isActive }) => isActive===false && css`
    border: ${ theme.COLORS.GRAY_6 } 1px solid;
    background-color: ${ theme.COLORS.GRAY_6 };
  `};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1;

  border-radius: 6px;
  height: 50px;
`;

export const SelectCircle = styled.View <SelectStyleProps>`
  border-radius: 8px;
  height: 8px;
  width: 8px;
  background-color: ${({ theme, type }) => type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const SelectText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;