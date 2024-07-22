import { HStack, AddIcon, VStack, Heading,Text } from "@gluestack-ui/themed";
import { ButtonCustom } from "./ButtonCustom";
import { ImageUser } from "./ImageUser";
import { useAuth } from "@hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header(){
    const { user } = useAuth();

    console.log(user);

    return (
        <SafeAreaView>
            <HStack mt={30} mb={10} gap={20} alignItems="center">
                <HStack flex={1} alignItems="center" gap={5}>
                    <ImageUser
                        size={40}
                        source={require('@assets/userProfile.svg')}
                    />
                    <VStack>
                        <Heading fontSize={"$md"}>Boas Vindas,</Heading>
                        <Text fontSize={"$sm"}>Test</Text>
                    </VStack>
                </HStack>
                <HStack flex={1}>
                    <ButtonCustom
                        title="Criar Produto"
                        variant="tertiary"
                        icon={AddIcon}
                    />
                </HStack>
                
            </HStack>
        </SafeAreaView>
        
    )
}