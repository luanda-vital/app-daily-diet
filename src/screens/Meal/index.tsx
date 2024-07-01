import { MealTypeStyleProps, Container, InfoContainer, InfoSection, Title, Text, DateTimeTitle, Status, StatusCircle, StatusText, ButtonsWrapper, ModalText, ModalButtonsWrapper } from './styles';

import { Header } from '@components/Header';
import { ContentBox } from '@components/ContentBox';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { useState } from 'react';

type Props = {
  type?: MealTypeStyleProps,
}

export function Meal({type='FOLLOWING_DIET'}: Props) {
  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);

  const meal = {
    date: '2022-08-12',
    name: 'Sanduíche',
    description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
    time: '16:00:00',
    followingDiet: true
  };

  function formatDate(date: string) {
    const dateParts = date.split('-');
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }

  function formatTime(time: string) {
    const timeParts = time.split(':');
    return `${timeParts[1]}:${timeParts[2]}`;
  }

  const formattedDate = formatDate(meal.date);
  const formattedTime = formatTime(meal.time);

  return (
    <Container type={type}>
      <Header title='Refeição'/>

      <ContentBox>
        <InfoContainer>
          <InfoSection>
            <Title>{meal.name}</Title>
            <Text>{meal.description}</Text>
          </InfoSection>

          <InfoSection>
            <DateTimeTitle>Data e hora</DateTimeTitle>

            <Text>{formattedDate} às {formattedTime}</Text>
          </InfoSection>

          <Status>
            <StatusCircle type={type} />
          
            <StatusText>
              {meal.followingDiet === true ? 'dentro da dieta' : 'fora da dieta'}
            </StatusText>
          </Status>
        </InfoContainer>

        <ButtonsWrapper>
          <Button
            text='Editar refeição'
            icon='PencilSimpleLine'
          />

          <Button
            text='Excluir refeição'
            type='OUTLINE'
            icon='Trash'
            onPress={() => setDeleteModalVisible(true)}
          />
        </ButtonsWrapper>
      </ContentBox>

      <Modal visible={deleteModalVisible}>
        <ModalText>
          Deseja realmente excluir o registro da refeição?
        </ModalText>

        <ModalButtonsWrapper>
          <Button
            text='Cancelar'
            type='OUTLINE'
            style={{flex: 1}}
            onPress={() => setDeleteModalVisible(false)}
          />

          <Button
            text='Sim, excluir'
            style={{flex: 1}}
          />
        </ModalButtonsWrapper>
      </Modal>
    </Container>
  )
}