import { GluestackUIProvider, Text, Box, Center } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
import { useFonts } from 'expo-font';
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

export default function App() {

  const [fontsLoaded] = useFonts({Karla_400Regular,Karla_700Bold});

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? (
        <Center flex={1}>
          <Text>Open up App.js to start working on your app!</Text>
        </Center>
      ) : (
        <Center flex={1}>
          <Text>Loading...</Text>
        </Center>
      )}
    </GluestackUIProvider>
  );
}
