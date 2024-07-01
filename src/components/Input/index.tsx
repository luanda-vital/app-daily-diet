import { useState } from 'react';
import { StyleProp, TextInputProps } from 'react-native';
import { Container, Field } from './styles';

import { Label } from '@components/Label';
import theme from 'src/theme';

type Props = TextInputProps & {
  title: string,
}

export function Input({ title, style, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label title={title} />
      <Field { ... rest }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[isFocused && {borderWidth: 1, borderColor: theme.COLORS.GRAY_3}, style]}
      />
    </Container>
  );
}