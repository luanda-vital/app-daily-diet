import { Container, Title, Text, StrongText, Illustration } from './styles';

import { Button } from '@components/Button';

import followingDietImg from '@assets/following-diet.png';
import offDietImg from '@assets/off-diet.png';

export function Feedback() {
  const followingDiet = {
    title: 'Continue assim!',
    text: {
      pt1: 'Você continua',
      pt2: 'dentro da dieta.',
      pt3: 'Muito bem!'
    },
    image: followingDietImg
  }

  const offDiet = {
    title: 'Que pena!',
    text: {
      pt1: 'Você',
      pt2: 'saiu da dieta',
      pt3: 'dessa vez, mas continue se esforçando e não desista!'
    },
    image: offDietImg
  }

  const feedback = 'offDiet';

  const { title, text, image } = feedback === 'followingDiet' ? followingDiet : offDiet;

  return (
    <Container>
      <Title type={feedback}>{title}</Title>
      
      <Text>
        {text.pt1} <StrongText>{text.pt2}</StrongText> {text.pt3}
      </Text>

      <Illustration source={image} />
      
      <Button text='Ir para a página inicial'></Button>
    </Container>
  );
}