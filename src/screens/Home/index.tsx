import { Container, Header, Logo, ProfilePictureContainer, ProfilePicture, NewMealText } from './styles';

import logoImg from '@assets/logo.png';
import profilePicture from '@assets/profile-pic.jpg';
import { Button } from '@components/Button';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={ logoImg } />

        <ProfilePictureContainer>
          <ProfilePicture source={ profilePicture }/>
        </ProfilePictureContainer>
      </Header>

      <NewMealText>Refeições</NewMealText>
  
      <Button
        icon='Plus'
        text='Nova refeição'
      />
    </Container>
  );
}