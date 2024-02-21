import { Container, BackButton, BackIcon, Title } from "./styles";

type Props = {
  title: string,
}

export function Header({ title }: Props) {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>

      <Title>
        { title }
      </Title>
    </Container>
  )
}