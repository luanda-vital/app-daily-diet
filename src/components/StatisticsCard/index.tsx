import { ViewProps } from 'react-native';
import { Container, Value, Label, CardTypeStyleProps } from './styles';

type Props = ViewProps & {
  type?: CardTypeStyleProps,
  value: string,
  label: string,
}

export function StatisticsCard({type='DEFAULT', value, label, ...rest}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Value>{value}</Value>

      <Label>{label}</Label>
    </Container>
  );
}