import { SectionList } from 'react-native';

import {
  Container,
  Header, Logo, ProfilePictureContainer, ProfilePicture,
  NewMealText,
  ListHeader, ListSectionSeparator, ListItemSeparator
} from './styles';

import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import logoImg from '@assets/logo.png';
import profilePicture from '@assets/profile-pic.jpg';

interface Meal {
  date: string;
  name: string;
  time: string;
  followingDiet: boolean;
}

export function Home() {
  const meals: Meal[] = [
    {
      date: '2024-02-22',
      name: 'Breakfast',
      time: '08:00',
      followingDiet: true
    },
    {
      date: '2024-02-20',
      name: 'Lunch',
      time: '12:30',
      followingDiet: false
    },
    {
      date: '2024-02-20',
      name: 'Lunch',
      time: '16:30',
      followingDiet: false
    },
    {
      date: '2024-02-19',
      name: 'Breakfast',
      time: '08:00',
      followingDiet: true
    },
    {
      date: '2024-02-21',
      name: 'Lunch',
      time: '12:30',
      followingDiet: false
    },
    {
      date: '2024-02-20',
      name: 'Breakfast',
      time: '08:00',
      followingDiet: true
    }
  ];

  function groupByDate(meals: Meal[]) {
    const groupedMeals: { [date: string]: Meal[] } = {};
  
    meals.forEach((meal) => {
      const date = meal.date;
  
      if (!groupedMeals[date]) {
        groupedMeals[date] = [];
      }
  
      groupedMeals[date].push(meal);
    });

    return groupedMeals;
  };

  function formatList(mealsList: { [date: string]: Meal[] }) {
    const formattedList = Object.keys(mealsList).map((date) => ({
      title: date,
      data: mealsList[date],
    }));

    return formattedList;
  }

  function orderDates(mealsList: { title: string, data: Meal[] }[]) {
    const orderedDates = mealsList.sort((a, b) => {
      const dateA = new Date(a.title);
      const dateB = new Date(b.title);

      return dateB.getTime() - dateA.getTime();
    });

    return orderedDates;
  }

  function orderTime(mealsList: { title: string, data: Meal[] }[]) {
    const orderedTime = mealsList.map((section) => {
      section.data.sort((a, b) => {
        const timeA = new Date(`2002-11-03T${a.time}`);
        const timeB = new Date(`2002-11-03T${b.time}`);
  
        return timeB.getTime() - timeA.getTime();
      });
  
      return section;
    });

    return orderedTime;
  }
  
  const getMealsList = () => {
    const groupedByDatesMeal = groupByDate(meals);
    const formattedMealsList = formatList(groupedByDatesMeal);
    const orderedDates = orderDates(formattedMealsList);
    const mealsList = orderTime(orderedDates);

    return mealsList;
  }

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
        style={{marginBottom: 32}}
      />

      <SectionList
        sections={getMealsList()}

        renderSectionHeader={(obj) => (
          <ListHeader>
            {obj.section.title}
          </ListHeader>
        )}

        renderItem={({ item }) => (
          <MealCard 
            time={item.time}
            name={item.name}
            followingDiet={item.followingDiet }
          />
        )}
    
        ItemSeparatorComponent={() => <ListItemSeparator />}
        SectionSeparatorComponent={() => <ListSectionSeparator />}

        contentContainerStyle={{paddingBottom: 120}} 
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}