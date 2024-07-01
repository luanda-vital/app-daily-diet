import  { ReactNode } from 'react';
import { Container, ModalBackground, ModalBox } from './styles';

type Props = {
  visible: boolean;
  children?: ReactNode;
}

export function Modal({ visible, children }: Props) {
  return (
    <Container
      transparent={true}
      animationType='fade'
      visible={visible}
    >
      <ModalBackground>
        <ModalBox>
          {children}
        </ModalBox>
      </ModalBackground>
    </Container>
  );
};