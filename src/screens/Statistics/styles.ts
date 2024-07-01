import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type StatisticsTypeStyleProps = 'FOLLOWING_DIET' | 'OFF_DIET';

type Props = {
  type: StatisticsTypeStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type==='FOLLOWING_DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding: 32px;
`;

export const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({}) => ({
  size: 24,
  })) <Props>`

  color: ${({ theme, type }) =>
    type==='FOLLOWING_DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.TITLE_XS }px;
  `};

  margin-bottom: 24px;
  text-align: center;
`;

export const Cards = styled.View`
  gap: 12px;
`;

export const DividedCards = styled.View`
  flex-direction: row;
  gap: 12px;
`;