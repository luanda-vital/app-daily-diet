import { useState } from 'react';

import { Container, ContentContainer, InputContainer } from './styles';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function NewMeal() {
  return (
    <Container>
      <Header title='Nova refeição'/>

      <ContentContainer>
        <InputContainer>
          <Input title='Nome' />

          <Input
            title='Detalhes'
            multiline={true}
            style={{height: 120, textAlignVertical: 'top'}}
          />
        </InputContainer>

        <Button text='Cadastrar refeição'/>
      </ContentContainer>
    </Container>
  )
}