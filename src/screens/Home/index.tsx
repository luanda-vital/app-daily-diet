import { SectionList } from 'react-native';

import {
  Container,
  Header, Logo, ProfilePictureContainer, ProfilePicture,
  NewMealText,
  ListHeader, ListSectionSeparator, ListItemSeparator, EmptyListContainer, EmptyListText
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

interface mealsList {
  title: string,
  data: Meal[]
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

  function formatList(meals: { [date: string]: Meal[] }) {
    const formattedList = Object.keys(meals).map((date) => ({
      title: date,
      data: meals[date],
    }));

    return formattedList;
  }

  function orderDates(meals: mealsList[]) {
    const orderedDates = meals.sort((a, b) => {
      const dateA = new Date(a.title);
      const dateB = new Date(b.title);

      return dateB.getTime() - dateA.getTime();
    });

    return orderedDates;
  }

  function orderTime(meals: mealsList[]) {
    const orderedTime = meals.map((section) => {
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
        
        ListEmptyComponent={
          <EmptyListContainer>
            <EmptyListText>
              Ainda não há refeições cadastradas.
            </EmptyListText>
          </EmptyListContainer>
        }

        contentContainerStyle={[meals.length !== 0 ? { paddingBottom: 100 } : { flex: 1}]} 
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}