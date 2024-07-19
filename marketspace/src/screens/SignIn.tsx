import { Center, Heading, ScrollView, Text, View, VStack } from "@gluestack-ui/themed";
import { InputCustom } from "@components/InputCustom";

import LogoImage from '@assets/logo.svg';
import { ButtonCustom } from "@components/ButtonCustom";
import { Dimensions } from "react-native";
import { AuthNavigationProps } from "src/routes/auth.routes";
import { useNavigation } from "@react-navigation/native";


export function SignIn(){
    const tenPercentHeight = (Dimensions.get('screen').height) * 0.1;

    const navigation = useNavigation<AuthNavigationProps>();

    function handleCreateAccount(){
        navigation.navigate('signUp');
    }

    return (
        
        <ScrollView flex={1} bg={"$white"} >
            <View px={42} bg={"$trueGray200"} pt={tenPercentHeight} borderBottomRightRadius={20} borderBottomLeftRadius={20}>            
                <Center>
                    <LogoImage />
                    <Heading fontSize={"$2xl"}>marketspace</Heading>
                    <Text fontSize={"$sm"}>Seu espaço de compra e venda</Text>
                </Center>

                <Center my={tenPercentHeight}>
                    <Text fontSize={"$md"} mb={10}>Acesse sua conta</Text>
                    <InputCustom placeholder="E-mail" keyboardType="email-address" />
                    <InputCustom placeholder="Senha" type="password"/>
                    <ButtonCustom title="Entrar" variant="primary"  />
                </Center>
            </View>

            <View mt={tenPercentHeight} px={42}>
                <Center>
                    <Text fontSize={"$md"} mb={10}>Ainda não tem uma conta?</Text>
                    <ButtonCustom title="Criar uma conta" variant="secondary" onPress={handleCreateAccount} />
                </Center>
            </View>
            

        </ScrollView>
    )
}