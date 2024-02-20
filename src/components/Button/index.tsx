import { TouchableOpacityProps } from 'react-native';
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

import { ButtonTypeStyleProps, Container, Icon, Text } from './styles';

type ButtonIconProps =  'DEFAULT' | 'Plus' | 'PencilSimpleLine' | 'Trash';

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps,
  icon?: ButtonIconProps,
  text: string,
}

export function Button({type='SOLID', icon='DEFAULT', text, ...rest}: Props) {

  const icons = {
    'Plus': Plus,
    'PencilSimpleLine': PencilSimpleLine,
    'Trash': Trash
  };

  return (
    <Container
      type={type}
      {...rest}
    >
      { 
        icon!=='DEFAULT' &&
        <Icon as={ icons[icon as keyof typeof icons] } type={type}/>
      }

      <Text type={type}>{text}</Text>
    </Container>
  );
}