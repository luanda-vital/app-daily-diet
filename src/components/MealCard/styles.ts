import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  followingDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
  padding: 14px 16px 14px 12px;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border: 1px solid;

  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.XS }px;
  `};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Meal = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
  `};
`;

export const Status = styled.View  <Props>`
  width: 14px;
  height: 14px;
  border-radius: 100px;

  background-color: ${({ theme, followingDiet }) => followingDiet === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;