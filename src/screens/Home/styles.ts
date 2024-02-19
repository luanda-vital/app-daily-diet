import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

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
`

export const Logo = styled.Image`
`

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 100px;
  border: ${({ theme }) => theme.COLORS.GRAY_2} 2px solid;
`