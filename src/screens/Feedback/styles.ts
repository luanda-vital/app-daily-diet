import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type FeedbackTypeStyleProps = 'followingDiet' | 'offDiet';

type Props = {
  type: FeedbackTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text <Props>`
  ${({ theme, type }) => css`
    color: ${ type === 'followingDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.XL }px;
  `};

  text-align: center;
  margin-top: -32px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
  `};

  text-align: center;
  margin-bottom: 40px;
`;

export const StrongText = styled.Text`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD };
  `};
`;

export const Illustration = styled.Image`
  margin-bottom: 32px;
`;
