import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';

import { Container, DateTimeContainer, DietContainer, InputContainer, Press, SelectContainer } from './styles';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import { Label } from '@components/Label';
import { ContentBox } from '@components/ContentBox';

export function NewMeal() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<any>();
  const [diet, setDiet] = useState<boolean>();

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState<'date'|'time'>();

  const showDatePicker = (mode: 'date' | 'time') => {
    setDatePickerVisible(true);
    setDatePickerMode(mode);
  };
  
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  const handleConfirmTime = (time: any) => {
    setTime(time);
    hideDatePicker();
  };

  return (
    <Container>
      <Header title='Nova refeição'/>

      <ContentBox>
        <InputContainer>
          <Input title='Nome' />

          <Input
            title='Descrição'
            multiline={true}
            style={{height: 120, textAlignVertical: 'top'}}
          />

          <DateTimeContainer>
            <Press onPress={() => showDatePicker('date')}>
              <Input
                title='Data'
                value={date ? Moment(date).format('D/MM/YYYY') : ''}
                editable={false}
                pointerEvents='none'
              />
            </Press>

            <Press onPress={() => showDatePicker('time')}>
              <Input
                title='Hora'
                value={time ? Moment(time).format('HH:mm') : ''}
                editable={false}
                pointerEvents='none'
              />
            </Press>
          </DateTimeContainer>

          <DietContainer>
            <Label title='Está dentro da dieta?' />

            <SelectContainer>
              <Select
                type={true}
                isActive={diet===true ? true : false}
                onPress={() => setDiet(true)}
              />

              <Select
                type={false}
                isActive={diet===false ? true : false}
                onPress={() => setDiet(false)}
              />
            </SelectContainer>
          </DietContainer>
          
          <DateTimePickerModal
            date={date}
            isVisible={datePickerVisible}
            mode={datePickerMode}
            onConfirm={datePickerMode === 'time' ? handleConfirmTime : handleConfirmDate}
            onCancel={hideDatePicker}
          />
        </InputContainer>

        <Button text='Cadastrar refeição'/>
      </ContentBox>
    </Container>
  )
}