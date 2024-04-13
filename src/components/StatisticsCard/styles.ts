import styled, { css } from 'styled-components/native';

export type CardTypeStyleProps = 'DEFAULT' | 'FOLLOWING_DIET' | 'OFF_DIET';

type Props = {
  type: CardTypeStyleProps;
}

export const Container = styled.View <Props>`
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type==='DEFAULT' ? theme.COLORS.GRAY_6 : (
      type==='FOLLOWING_DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    )
  };
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_M }px;
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BODY_S }px;
  `};
`;