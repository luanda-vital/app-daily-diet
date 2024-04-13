import { 
  StatisticsTypeStyleProps, Container,
  Header, GoBackButton, Icon,
  Title, Cards, DividedCards
} from './styles';

import { ContentBox } from '@components/ContentBox';
import { FollowingDietPercentage } from '@components/FollowingDietPercentage';
import { StatisticsCard } from '@components/StatisticsCard';

type Props = {
  type?: StatisticsTypeStyleProps,
}

export function Statistics({type='FOLLOWING_DIET'}: Props) {
  return (
    <Container type={type}>
      <Header>
        <GoBackButton>
          <Icon type={type} />
        </GoBackButton>

        <FollowingDietPercentage value={90.86}/>
      </Header>
      
      <ContentBox>
        <Title>Estatísticas gerais</Title>

        <Cards>
          <StatisticsCard
            value='22'
            label='melhor sequência de pratos dentro da dieta'
          />

          <StatisticsCard
            value='109'
            label='refeições registradas'
          />

          <DividedCards>
            <StatisticsCard
              type='FOLLOWING_DIET'
              value='99'
              label='refeições dentro da dieta'
              style={{flex: 1}}
            />

            <StatisticsCard
              type='OFF_DIET'
              value='10'
              label='refeições fora da dieta'
              style={{flex: 1}}
            />
          </DividedCards>
        </Cards>
      </ContentBox>
    </Container>
  );
}