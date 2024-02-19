import { Text } from 'react-native';

import { Container, Header, Logo, ProfilePicture } from './styles';

import logoImg from '@assets/logo.png';
import profilePicture from '@assets/profile-pic.jpg';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={ logoImg } />
        <ProfilePicture source={ profilePicture }/>
      </Header>
    </Container>
  );
}
