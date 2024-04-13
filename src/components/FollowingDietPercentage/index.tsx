import { Container, Percentage, Label } from './styles';

type Props = {
  value: number,
}

export function FollowingDietPercentage({value}: Props) {
  return (
    <Container>
        <Percentage>{value} %</Percentage>
        <Label>das refeições dentro da dieta</Label>
    </Container>
  );
}