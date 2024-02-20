import { TouchableOpacityProps } from 'react-native';

import { Container, Time, Divider, Meal, Status } from './styles';

type Props = TouchableOpacityProps & {
  time: string,
  name: string,
  followingDiet: boolean,
}

export function MealCard({time, name, followingDiet, ...rest}: Props) {
  return (
    <Container
      {...rest}
    >
      <Time>{time}</Time>
      <Divider />
      <Meal>{name}</Meal>
      <Status followingDiet={followingDiet}/>
    </Container>
  );
}