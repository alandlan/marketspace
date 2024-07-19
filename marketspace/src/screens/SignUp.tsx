import { Center,Heading,Input,ScrollView,Text, View } from "@gluestack-ui/themed";

import LogoImage from '@assets/logo.svg';
import { ImageUser } from "@components/ImageUser";
import { InputCustom } from "@components/InputCustom";
import { ButtonCustom } from "@components/ButtonCustom";

export function SignUp(){
    return (
        <ScrollView>
            <View px={42} pt={40}>
                <Center>
                    <LogoImage height={50} />
                    <Heading>Boas Vindas!</Heading>
                    <Text fontSize={"$sm"}>Crie cua conta e use o espaço para comprar itens variados e vender seus produtos.</Text>
                </Center>
                <Center py={20}>
                    <ImageUser size={100} source={require('@assets/userProfile.svg')} />
                </Center>
                <Center>
                    <InputCustom placeholder="Nome" />
                    <InputCustom placeholder="E-mail" keyboardType="email-address" />
                    <InputCustom placeholder="Telefone" keyboardType="phone-pad" />
                    <InputCustom placeholder="Senha" type="password"/>
                    <InputCustom placeholder="Confirme sua senha" type="password"/>
                </Center>

                <Center mt={10}>
                    <ButtonCustom title="Criar conta" variant="tertiary" />
                </Center>

                <Center my={30}>
                    <Text>Já tem uma conta?</Text>
                    <ButtonCustom title="Ir para o login" variant="secondary" />
                </Center>
            </View>
        </ScrollView>
    )
}