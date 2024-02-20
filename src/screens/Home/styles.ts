import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`
`;

export const ProfilePictureContainer = styled.View`
  width: 40px;
  height: 40px;

  border-radius: 100px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-width: 2px;
  border-style: solid;

  overflow: hidden;
`;

export const ProfilePicture = styled.Image`
  width: 100%;
  height: 100%;
`;

export const NewMealText = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.MD }px;
  `};
`;

export const ListHeader = styled.Text`
  margin-bottom: -24px;
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.LG }px;
  `};
`;

export const ListItemSeparator = styled.View`
  height: 8px;
`;

export const ListSectionSeparator = styled.Text`
  height: 32px;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyListText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_3 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;