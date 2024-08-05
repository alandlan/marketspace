import { HStack, AddIcon, VStack, Heading,Text } from "@gluestack-ui/themed";
import { ButtonCustom } from "./ButtonCustom";
import { ImageUser } from "./ImageUser";
import { useAuth } from "@hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export function Header(){
    const { user } = useAuth();

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleCreatAd() {
        navigation.navigate("NewAd");
    }

    return (
        <SafeAreaView>
            <HStack mt={30} mb={30} gap={20} alignItems="center">
                <HStack flex={1} alignItems="center" gap={5}>
                    <ImageUser
                        size={40}
                        source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}}
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
                        onPress={() => handleCreatAd()}
                    />
                </HStack>
                
            </HStack>
        </SafeAreaView>
        
    )
}