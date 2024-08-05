import { Pressable, View } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "phosphor-react-native"



export function NewAd(){

    const navigation = useNavigation<AppStackNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View flex={1} p={20}>
            <View h={30} mt={30} mb={10}>
                <Pressable onPress={() => { handleGoBack() }}>
                    <ArrowLeft />
                </Pressable>
            </View>
        </View>
    )
}