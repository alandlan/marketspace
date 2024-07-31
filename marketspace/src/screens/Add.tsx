import { Badge } from "@components/Badge";
import { ButtonCustom } from "@components/ButtonCustom";
import { ImageUser } from "@components/ImageUser";
import { Heading, HStack, Image, Pressable, ScrollView, Text, View, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft, Barcode, CreditCard, Money, QrCode, WhatsappLogo } from "phosphor-react-native";



export function Add(){
    const navigation = useNavigation<AppStackNavigatorRoutesProps>();

    function handleGoBack() {

        navigation.goBack();
        return true;
    }

    return (
        <View flex={1} p={20}>
            <View h={30} mt={30} mb={10}>
                <Pressable onPress={() => { handleGoBack() }}>
                    <ArrowLeft />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View w="$full" my={10}>
                    <Image 
                        source={{uri: "https://img.ltwebstatic.com/images3_spmp/2024/03/13/12/1710336855e00ee01f326c34559817944d8e1a905d_thumbnail_720x.jpg"}}
                        // resizeMode="cover"
                        w="$full"
                        h={300}
                        alt="Product"
                        borderRadius={10}
                    />
                </View>

                <HStack alignItems="center" my={10} gap={5}>
                    <ImageUser size={30} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}} />
                    <Text fontSize={14}>Nome do Usuário</Text>
                </HStack>

                <View w={100} my={10}>
                    <Badge text="Novo" active icon={true} />
                </View>

                <HStack justifyContent="space-between" my={5}>
                    <Heading fontSize={18}>Tênis Vermelho</Heading>
                    <Heading fontSize={14} color={"$produtoBlue"}>
                        R$
                        <Heading fontSize={18} color={"$produtoBlue"}>
                            150,00
                        </Heading>
                    </Heading>
                </HStack>

                <View my={5}>
                    <Text fontSize={14}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quod dignissimos ipsa inventore pariatur fugit, nostrum saepe illum ipsam voluptatem placeat qui facere perspiciatis nesciunt doloremque optio quis et eius?</Text>
                </View>

                <HStack alignItems="center" gap={5}>
                    <Heading fontSize={16}>Aceita troca?</Heading>
                    <Text>Sim</Text>
                </HStack>

                <VStack my={5}>
                    <Heading fontSize={16}>Meios de pagamento</Heading>
                    <HStack gap={5} mb={5}>
                        <Barcode />
                        <Text>Boleto</Text>
                    </HStack>
                    <HStack gap={5} mb={5}>
                        <QrCode />
                        <Text>Pix</Text>
                    </HStack>
                    <HStack gap={5} mb={5}>
                        <Money />
                        <Text>Dinheiro</Text>
                    </HStack>
                    <HStack gap={5} mb={5}>
                        <CreditCard />
                        <Text>Cartão</Text>
                    </HStack>
                </VStack>

                <HStack alignItems="center" justifyContent={"space-between"} gap={20}>
                    <Heading fontSize={16} color={"$produtoBlue"}>
                        R$
                        <Heading fontSize={26} color={"$produtoBlue"}>
                            150,00
                        </Heading>
                    </Heading>
                    <View flex={1}>
                        <ButtonCustom title="Entrar em contato" variant="primary" icon={WhatsappLogo}  />
                    </View>
                </HStack>
            </ScrollView>

            
        </View>
    )
}