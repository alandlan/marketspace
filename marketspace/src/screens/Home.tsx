import { Header } from "@components/Header";
import { Center,Text, View, VStack } from "@gluestack-ui/themed";



export function Home(){
    return (
        <VStack flex={1} px={20}>
            <Header />
            <Text>Home</Text>
        </VStack>
    )
}