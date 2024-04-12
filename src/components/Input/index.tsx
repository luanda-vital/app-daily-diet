import { Label } from '@components/Label';
import { Container, Field } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  title: string,
}

export function Input({ title, ...rest }: Props) {
  return (
    <Container>
      <Label title={title} />
      <Field { ... rest } />
    </Container>
  );
}