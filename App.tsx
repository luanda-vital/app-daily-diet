import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';

import theme from  './src/theme';

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/Feedback';
import { Statistics } from '@screens/Statistics';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaProvider>
        {fontsLoaded ? <Home /> : <Loading/>}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}