import { Container, Header, Logo, ProfilePictureContainer, ProfilePicture, NewMealText } from './styles';

import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import logoImg from '@assets/logo.png';
import profilePicture from '@assets/profile-pic.jpg';

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

      <MealCard 
        time='20:00'
        name='X-tudo'
        followingDiet={false}
      />

      <MealCard 
        time='20:00'
        name='Whey protein com leite'
        followingDiet={true}
      />
    </Container>
  );
}