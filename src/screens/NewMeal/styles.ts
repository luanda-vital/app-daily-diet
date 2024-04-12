import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 40px 24px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
`;

export const InputContainer = styled.View`
  flex: 1;
  gap: 24px;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const Press = styled.Pressable`
  flex: 1;
`;

export const DietContainer = styled.View`
  gap:4px;
`;

export const SelectContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;