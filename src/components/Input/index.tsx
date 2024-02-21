import { Container, Label, Field, InputTypeProps } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  title: string,
}

export function Input({ title, ...rest }: Props) {
  return (
    <Container>
      <Label>{ title }</Label>
      <Field { ... rest } />
    </Container>
  );
}