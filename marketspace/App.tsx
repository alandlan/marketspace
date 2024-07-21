import { GluestackUIProvider, Text, Box, Center } from '@gluestack-ui/themed';
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { useFonts } from 'expo-font';

import { config } from './config/gluestack-ui.config';
import { Routes } from './src/routes';
import { AuthContextProvider } from 'src/contexts/AuthContext';

export default function App() {

  const [fontsLoaded] = useFonts({Karla_400Regular,Karla_700Bold});

  return (
    <GluestackUIProvider config={config}>
      <AuthContextProvider>
        {fontsLoaded ? (
          <Routes />
        ) : (
          <Center flex={1}>
            <Text>Loading...</Text>
          </Center>
        )}
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
