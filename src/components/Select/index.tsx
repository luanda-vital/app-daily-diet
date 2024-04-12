import { TouchableOpacityProps } from 'react-native';
import { Container, SelectCircle, SelectText, SelectStyleProps } from './styles';

type Props = TouchableOpacityProps & SelectStyleProps;

export function Select({ isActive = false, type, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      type={type}
      {...rest}
    >
      <SelectCircle type={type} isActive={isActive} />
      <SelectText>{ type === true ? 'Sim' : 'Não'}</SelectText>
    </Container>
  );
}