import { GluestackUIProvider, Text, Box, Center } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1}>
        <Text>Open up App.js to start working on your app!</Text>
      </Center>
    </GluestackUIProvider>
  );
}
