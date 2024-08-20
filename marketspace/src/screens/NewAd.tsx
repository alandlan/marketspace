import { Heading, Pressable, Text, View } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "phosphor-react-native"
import { ScrollView } from "react-native-gesture-handler";



export function NewAd(){

    const navigation = useNavigation<AppStackNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View flex={1} p={20}>
            <View h={30} mt={30} mb={10} position="relative" justifyContent="center" alignItems='center'>
                <Pressable left={0} position="absolute" onPress={() => { handleGoBack() }}>
                    <ArrowLeft />
                </Pressable>

                <Heading>Criar anúncio</Heading>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Heading mt={10} fontSize={16} color={"$trueGray600"}>Imagens</Heading>
                <Text fontSize={14}>Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!</Text>
            </ScrollView>
        </View>
    )
}