import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type MealTypeStyleProps = 'FOLLOWING_DIET' | 'OFF_DIET';

type Props = {
  type: MealTypeStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type==='FOLLOWING_DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };
`;

export const InfoContainer = styled.View`
  flex: 1;
  gap: 24px;
`;

export const InfoSection = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_M }px;
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BODY_M }px;
  `};
`;

export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_XS }px;
  `};
`;

export const Status = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  align-items: center;
  width: min-content;
  align-self: flex-start;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6 };
`;

export const StatusCircle = styled.View <Props>`
  height: 8px;
  width: 8px;
  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type==='FOLLOWING_DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BODY_S }px;
  `};
`;

export const ButtonsWrapper = styled.View`
  gap: 8px;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_S }px;
  `};

  margin: 16px 0 32px;
  text-align: center;
`;

export const ModalButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;