import { GluestackUIProvider, Text, Box, Center, StatusBar } from '@gluestack-ui/themed';
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { useFonts } from 'expo-font';

import { config } from './config/gluestack-ui.config';
import { Routes } from './src/routes';
import { AuthContextProvider } from 'src/contexts/AuthContext';
import { FilterProductContextProvider } from '@contexts/FilterProductContext';

export default function App() {

  const [fontsLoaded] = useFonts({Karla_400Regular,Karla_700Bold});

  return (
    <GluestackUIProvider config={config}>
        <AuthContextProvider>
          <FilterProductContextProvider>
            {fontsLoaded ? (
              <Routes />
            ) : (
              <Center flex={1}>
                <Text>Loading...</Text>
              </Center>
            )}
          </FilterProductContextProvider>
        </AuthContextProvider>
      
    </GluestackUIProvider>
  );
}
